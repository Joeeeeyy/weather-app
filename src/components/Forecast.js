// Forecast.js
import React from "react";
import moment from "moment";
import { IconContext } from "react-icons";
import { Card, Box, Text, chakra, HStack } from "@chakra-ui/react";
import "../css/Forecast.css";

const Forecast = ({ forecast, isCelsius, toggleUnits }) => {
  const getWeatherIcon = (icon) => {
    // Map Visual Crossings API icon codes to icon paths
    switch (icon) {
      case "01d":
        return require("../icons/clear-day.svg").default;
      case "01n":
        return require("../icons/clear-night.svg").default;
      case "02d":
        return require("../icons/partly-cloudy-day.svg").default;
      case "02n":
        return require("../icons/partly-cloudy-night.svg").default;
      case "03d":
        return require("../icons/cloudy.svg").default;
      case "03n":
        return require("../icons/cloudy.svg").default;
      case "04d":
        return require("../icons/overcast-day.svg").default;
      case "04n":
        return require("../icons/overcast-night.svg").default;
      case "09d":
        return require("../icons/rain.svg").default;
      case "09n":
        return require("../icons/rain.svg").default;
      case "10d":
        return require("../icons/partly-cloudy-day-rain.svg").default;
      case "10n":
        return require("../icons/partly-cloudy-night-rain.svg").default;
      case "11d":
        return require("../icons/partly-cloudy-night-rain.svg").default;
      case "11n":
        return require("../icons/partly-cloudy-night-rain.svg").default;
      case "13d":
        return require("../icons/snow.svg").default;
      case "13n":
        return require("../icons/partly-cloudy-night-rain.svg").default;
      case "50d":
        return require("../icons/mist.svg").default;
      case "50n":
        return require("../icons/partly-cloudy-night-rain.svg").default;
      default:
        return null;
    };
  };

  const filterUniqueDates = (forecast) => {
    const uniqueDates = [];
    const filteredForecast = [];

    for (let i = 0; i < forecast.length; i++) {
      const date = moment(forecast[i].date).format("YYYY-MM-DD");

      if (!uniqueDates.includes(date) && filteredForecast.length < 5) {
        uniqueDates.push(date);
        filteredForecast.push(forecast[i]);
      }
    }

    return filteredForecast;
  };

  const next5DaysForecast = filterUniqueDates(forecast);

  return (
    <Box className="card-group" overflow="scroll">
      <Box
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns="repeat(5, 1fr)"
        gap="5px"
        mx="auto"
        className="forecast-container"
      >
        {next5DaysForecast &&
          next5DaysForecast.map((day, index) => {
            let cardDate;
            if (index === 0) {
              cardDate = "Tomorrow";
            } else {
              cardDate = moment(day.date).format("ddd, MMM D");
            }

            return (
              <Card
                key={index}
                variant="elevated"
                bgColor="#1E213A"
                w="160px"
                fontFamily="Poppins"
                height="220px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="dark-lg"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                m={2}
                p={2}
              >
                <Text fontSize="16px" fontWeight="bold" color="#E7E7EB" fontFamily="Inter Tight">
                  {cardDate}
                </Text>
                <IconContext.Provider
                  value={{ color: "#E7E7EB", size: "80px" }}
                >
                  <chakra.img
                    src={getWeatherIcon(day.icon)}
                    alt={day.icon}
                    width="80px"
                    height="80px"
                  />
                </IconContext.Provider>
                <HStack color="#E7E7EB" display="flex">
                  <Text fontWeight="600" fontFamily="Inter Tight" cursor="pointer">
                    {Math.round(day.maxTemp)}
                    {isCelsius ? "°C" : "°F"}
                  </Text>
                  <Text fontWeight="400" fontFamily="Inter Tight" cursor="pointer">
                    {Math.round(day.minTemp)}
                    {isCelsius ? "°C" : "°F"}
                  </Text>
                </HStack>
              </Card>
            );
          })}
      </Box>
    </Box >

  );
};


export default Forecast;