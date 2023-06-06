import React, { useState, useEffect, useCallback } from "react";
import { IconButton, ChakraProvider, Heading, VStack, HStack } from "@chakra-ui/react";
import { FaCrosshairs } from "react-icons/fa";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import WeatherDetails from "./components/WeatherDetails";
import Search from "./components/Search";
import axios from "axios";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [city, setCity] = useState("Helsinki");
  const [isCelsius, setIsCelsius] = useState(false);

  const apiKey = "4fdce55d989f37e51e5cd7bba4198549";

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
    setCity(city);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`lat: ${lat}, lon: ${lon}`);

    fetchWeatherData(null, lat, lon);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  const fetchWeatherData = useCallback(async (city = null, lat = null, lon = null) => {
    let weatherUrl;
    let forecastUrl;

    const unit = isCelsius ? 'metric' : 'imperial'; // Use 'metric' for Celsius, 'imperial' for Fahrenheit

    if (lat && lon) {
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
      forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    } else {
      if (!city) {
        city = "Helsinki"; // Set default city to Burbank, CA if no city is provided
      }
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
      forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
    }

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl)
      ]);

      const weatherData = weatherResponse.data;
      const forecastData = forecastResponse.data;

      const currentWeather = {
        temp: weatherData.main.temp,
        conditions: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        city: weatherData.name,
        country: weatherData.sys.country,
      };

      const weatherDetails = {
        windSpeed: weatherData.wind.speed,
        windDirection: weatherData.wind.deg,
        visibility: weatherData.visibility,
        humidity: weatherData.main.humidity,
        airPressure: weatherData.main.pressure,
      };

      const forecast = forecastData.list.map((item) => {
        return {
          date: item.dt_txt,
          maxTemp: item.main.temp_max,
          minTemp: item.main.temp_min,
          icon: item.weather[0].icon,
        };
      });

      setCurrentWeather(currentWeather);
      setWeatherDetails(weatherDetails);
      setForecast(forecast);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  }, [isCelsius]);

  useEffect(() => {
    fetchWeatherData(city);
  }, [fetchWeatherData, city]);

  return (
    <ChakraProvider>
      <div className="app">
        <div className="left-side">
          <HStack justifyContent="space-between" mb="55px" mt="45px" h="45px" mx="35px">
            <Search onSearch={handleSearch} />
            <IconButton
              borderRadius="full"
              size="md"
              w="45px"
              h="45px"
              icon={<FaCrosshairs />}
              aria-label="Get Current Location"
              onClick={handleLocationClick}
              className="location-icon"
            />
          </HStack>
          <VStack spacing={8} alignItems="center" my="45px">
            <Heading as="h1" size="lg" className="date-heading">
              {city}
            </Heading>
            {currentWeather && (
              <CurrentWeather
                weather={currentWeather}
                isCelsius={isCelsius}
                toggleTemperatureUnit={toggleTemperatureUnit}
              />
            )}
          </VStack>
        </div>
        <div className="right-side">
          <VStack alignItems="center">
            {forecast && <Forecast forecast={forecast} isCelsius={isCelsius} />}
            {weatherDetails && <WeatherDetails details={weatherDetails} />}
            <Footer />
          </VStack>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
