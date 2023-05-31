import React from "react";
import moment from "moment";
import { IconContext } from "react-icons";
import { Card, Box, Heading, Text, chakra, HStack } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

function Forecast({ forecast }) {
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
    <chakra.div my="45px" gap="50px">
      <Heading my="30px" fontSize="24px">5-Day Forecast</Heading>
      <Box
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns={"repeat(5, 1fr)"}
        gap={"5px"}
        width="1000px"
        mx="auto"
      >
        {forecast &&
          forecast.map((day, index) => {
            let cardDate;
            if (index === 0) {
              cardDate = "Tomorrow";
            } else {
              cardDate = moment(day.datetime).format("ddd, MMM D");
            }

            return (
              <Card
                key={index.datetime}
                variant="elevated"
                bgColor="#1E213A"
                w="160px"
                height="220px"
                borderWidth="1px"
                bordercolor="none"
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
                <IconContext.Provider color="#E7E7EB" value={{ size: "80px" }}>
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
                    {day.tempmax.toFixed(0)}°F{" "}
                  </Text>
                  <Text>
                    <ArrowDownIcon />
                    {day.tempmin.toFixed(0)}°F
                  </Text>
                </HStack>
              </Card>
            );
          })}
      </Box>
    </chakra.div>
  );
}

export default Forecast;
