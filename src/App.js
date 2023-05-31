import React, { useState, useEffect, useCallback } from "react";
import { IconButton, ChakraProvider, HStack, Heading, VStack } from '@chakra-ui/react';
import { CiGps } from "react-icons/ci";
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import WeatherDetails from "./components/WeatherDetails";
import Search from "./components/Search";
import axios from "axios";
import './App.css';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Burbank, CA"); // Set default location
  const [isCelsius, setIsCelsius] = useState(false); // Added state for temperature units


  const apiKey = '7YHZF9XT8FJN4CL638M2688VN';
  const date = moment().format('dddd, ll');

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function handleSearch(city) {
    fetchWeatherData(city);
  }

  function toggleTemperatureUnit() {
    setIsCelsius(!isCelsius);
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetchWeatherData(null, latitude, longitude);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const fetchWeatherData = useCallback(async (city = null, latitude = null, longitude = null) => {
    let url;

    const unitGroup = isCelsius ? 'metric' : 'us'; // Use 'metric' for Celsius, 'us' for Fahrenheit

    if (latitude && longitude) {
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=${unitGroup}&key=${apiKey}`;
    } else {
      if (!city) {
        city = "Burbank, CA"; // Set default city to Burbank, CA if no city is provided
      }
      url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=${apiKey}`;
    }

    try {
      const response = await axios.get(url);
      const data = response.data;
      setCurrentWeather(data);
      setForecast(data.days.slice(1, 6));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [isCelsius]);

  useEffect(() => {
    fetchWeatherData(); // Fetch weather data for default location (Burbank, CA) on mount
  }, [fetchWeatherData]); // Include fetchWeatherData in the dependency array

  return (
    <ChakraProvider>
      <div className="container">
        <div className="column">
          <HStack justifyContent={"space-between"} ml="30px" mr="20px" my="45px">
            <Search
              onSearch={handleSearch}
              city={city}
              setCity={setCity}
            />
            <IconButton bgColor="#6E707A" borderRadius="full" icon={<CiGps />} onClick={handleLocationClick} _hover={{ bgColor: "#585676", color: "#fff" }} />
          </HStack>
          <Heading textAlign={"center"}>Today</Heading>
          {currentWeather && (
            <CurrentWeather
              icon={currentWeather.currentConditions.icon}
              temperature={isCelsius ? currentWeather.currentConditions.temp : (currentWeather.currentConditions.temp * 9 / 5) + 32} // Convert temperature to Fahrenheit if isCelsius is false
              conditions={currentWeather.currentConditions.conditions}
              date={date}
              location={currentWeather.resolvedAddress}
              isCelsius={isCelsius}
            />
          )}
        </div>
        <VStack>
          <div className="row">
            {forecast && <Forecast forecast={forecast} isCelsius={isCelsius} />}
          </div>
          <div className="row">
            {currentWeather && (
              <WeatherDetails
                windSpeed={currentWeather.currentConditions.windspeed}
                windDirection={currentWeather.currentConditions.winddir}
                humidity={currentWeather.currentConditions.humidity}
                visibility={currentWeather.currentConditions.visibility}
                airPressure={currentWeather.currentConditions.pressure}
                isCelsius={isCelsius}
              />
            )}
          </div>
        </VStack>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" checked={isCelsius} onChange={toggleTemperatureUnit} />
            <span className="slider round"></span>
          </label>
          <span className="unit-label">°C</span>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
