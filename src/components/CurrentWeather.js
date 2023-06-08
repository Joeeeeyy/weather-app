import React from "react";
import { IconContext } from 'react-icons';
import { HStack, Text, chakra, Box, Button } from "@chakra-ui/react";
import { IoLocation } from 'react-icons/io5';
import moment from "moment";

const CurrentWeather = ({ icon, isCelsius, weather, toggleUnit }) => {
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

  const toggleUnits = () => {
    toggleUnit();
  };

  const date = moment().format('LL');

  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"} gap="20px" my="45px">
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
      <HStack align="baseline">
        <Text fontWeight="600" fontFamily="Titan One" fontSize="170px" textAlign={"center"}>{Math.round(weather.temp)}</Text>
        <Text fontSize="60px" color="#A09FB1" fontFamily="Asap Condensed" fontWeight="semibold" onClick={toggleUnit} style={{ cursor: 'pointer' }}>
          {isCelsius ? "°C" : "°F"}
        </Text>
      </HStack>
      <HStack>
        <Text textTransform={"capitalize"} textAlign={"center"} color="#A09FB1" fontWeight="800" fontSize="32px" fontFamily="Inter Tight">{weather.conditions}</Text>
      </HStack>
      <HStack>
        <Text fontWeight="300" fontFamily="Inter" fontSize="16px" textAlign={"center"}>Today, {date}</Text>
      </HStack>
      <HStack>
        <IoLocation font-size="14px" />
        <Text fontWeight="400" fontFamily="Inter" fontSize="16px" textAlign={"center"}>{weather.city}, {weather.country}</Text>
      </HStack>
      <Button onClick={toggleUnits} size="md" bgColor="#3C47E9" fontWeight="400" fontSize="14px"
        fontFamily="Inter Tight" color="#fff">
        Toggle Units
      </Button>
    </Box>
  );
};

export default CurrentWeather;