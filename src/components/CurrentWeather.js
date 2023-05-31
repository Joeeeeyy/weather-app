import React from "react";
import { IconContext } from 'react-icons';
import { HStack, Text, chakra, Box } from "@chakra-ui/react";

function CurrentWeather({ icon, temperature, conditions, date, location }) {
  const getWeatherIcon = (icon) => {
    // Map Visual Crossings API icon codes to icon paths
    switch (icon) {
      case "clear-day":
        return require("../icons/clear-day.svg").default;
      case "clear-night":
        return require("../icons/clear-night.svg").default;
      case "partly-cloudy-day":
        return require("../icons/partly-cloudy-day.svg").default;
      case "partly-cloudy-night":
        return require("../icons/partly-cloudy-night.svg").default;
      case "cloudy":
        return require("../icons/cloudy.svg").default;
      case "rain":
        return require("../icons/rain.svg").default;
      case "snow":
        return require("../icons/snow.svg").default;
      case "sleet":
        return require("../icons/sleet.svg").default;
      case "wind":
        return require("../icons/wind.svg").default;
      case "fog":
        return require("../icons/fog.svg").default;
      case "hail":
        return require("../icons/hail.svg").default;
      case "thunderstorm":
        return require("../icons/thunderstorms.svg").default;
      default:
        return null;
    }
  };

  return (
    <div>
      <Box display="flex" flexDirection={"column"} alignItems={"center"} gap="20px">
        <HStack justifyContent={"center"} alignItems={"center"}>
          <IconContext.Provider value={{ size: '300px' }}>
            <chakra.img
              src={getWeatherIcon(icon)}
              alt={icon}
              width="300px"
              height="300px"
            />
          </IconContext.Provider>
        </HStack>
        <HStack>
          <Text fontWeight="600" fontFamily="Poppins" fontSize="144px" textAlign={"center"}>{temperature.toFixed(0)}</Text>
          <Text fontFamily="Poppins" fontSize="48px" fontWeight="500">&deg;F</Text>
        </HStack>
        <HStack>
          <Text textTransform={"capitalize"} textAlign={"center"} color="#A09FB1" fontWeight="500" fontSize="36px">{conditions}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="300" fontFamily="Poppins" fontSize="18px" textAlign={" center"}>{date}</Text>
        </HStack>
        <HStack>
          <Text textAlign={"center"}>{location}</Text>
        </HStack>
      </Box >
    </div >
  );
}

export default CurrentWeather;
