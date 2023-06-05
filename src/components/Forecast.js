// Forecast.js
import React from "react";
import moment from "moment";
import { IconContext } from "react-icons";
import { Card, Box, Heading, Text, chakra, HStack } from "@chakra-ui/react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";

const Forecast = ({ forecast, isCelsius }) => {
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

  const next5DaysForecast = forecast.slice(0, 5);

  return (
    <chakra.div my="45px" gap="50px">
      <Heading my="30px" fontSize="24px">
        5-Day Forecast
      </Heading>
      <Box
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns="repeat(5, 1fr)"
        gap="5px"
        width="1000px"
        mx="auto"
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
                <Text fontSize="16px" fontWeight="bold" color="#E7E7EB">
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
                  <Text>
                    <ArrowUpIcon />
                    {day.maxTemp.toFixed(0)}
                    {isCelsius ? "°C" : "°F"}{" "}
                  </Text>
                  <Text>
                    <ArrowDownIcon />
                    {day.minTemp.toFixed(0)}
                    {isCelsius ? "°C" : "°F"}
                  </Text>
                </HStack>
              </Card>
            );
          })}
      </Box>
    </chakra.div>
  );
};

export default Forecast;
