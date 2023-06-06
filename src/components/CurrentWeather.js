import React from "react";
import { IconContext } from 'react-icons';
import { HStack, Text, chakra, Box } from "@chakra-ui/react";
import { IoLocation } from 'react-icons/io5';
import moment from "moment";

const CurrentWeather = ({ temp, conditions, icon, city, country, isCelsius, weather }) => {
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


  const date = moment().format('LL');

  return (
    <div>
      <Box display="flex" flexDirection={"column"} alignItems={"center"} gap="20px">
        <HStack justifyContent={"center"} alignItems={"center"}>
          <IconContext.Provider value={{ size: '300px' }}>
            <chakra.img
              src={getWeatherIcon(weather.icon)}
              alt={icon}
              width="300px"
              height="300px"
            />
          </IconContext.Provider>
        </HStack>
        <HStack>
          <Text fontWeight="600" fontFamily="Poppins" fontSize="144px" textAlign={"center"}>{Math.round(weather.temp)}</Text>
          <Text fontSize="48px" fontWeight="semibold">
            {isCelsius ? "°C" : "°F"}
          </Text>
        </HStack>
        <HStack>
          <Text textTransform={"capitalize"} textAlign={"center"} color="#A09FB1" fontWeight="500" fontSize="36px">{weather.conditions}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="500" fontFamily="Poppins" fontSize="18px" textAlign={" center"}>Today, {date}</Text>
        </HStack>
        <HStack>
          <IoLocation />
          <Text fontWeight="400" fontFamily="Poppins" fontSize="18px" textAlign={" center"}>{weather.city}, {weather.country}</Text>
        </HStack>
      </Box>
    </div>
  );
};

export default CurrentWeather;
