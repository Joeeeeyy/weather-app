import React from 'react';
import { Progress, Icon, Heading, Card, Box, Text, chakra, HStack } from '@chakra-ui/react';
import { WiWindDeg } from "react-icons/wi";
import "../css/WeatherDetails.css"

function convertWindDirection(angle) {
  if (angle >= 0 && angle < 22.5) {
    return 'N';
  } else if (angle >= 22.5 && angle < 45) {
    return 'NNE';
  } else if (angle >= 45 && angle < 67.5) {
    return 'NE';
  } else if (angle >= 67.5 && angle < 90) {
    return 'ENE';
  } else if (angle >= 90 && angle < 112.5) {
    return 'E';
  } else if (angle >= 112.5 && angle < 135) {
    return 'ESE';
  } else if (angle >= 135 && angle < 157.5) {
    return 'SE';
  } else if (angle >= 157.5 && angle < 180) {
    return 'SSE';
  } else if (angle >= 180 && angle < 202.5) {
    return 'S';
  } else if (angle >= 202.5 && angle < 225) {
    return 'SSW';
  } else if (angle >= 225 && angle < 247.5) {
    return 'SW';
  } else if (angle >= 247.5 && angle < 270) {
    return 'WSW';
  } else if (angle >= 270 && angle < 292.5) {
    return 'W';
  } else if (angle >= 292.5 && angle < 315) {
    return 'WNW';
  } else if (angle >= 315 && angle < 337.5) {
    return 'NW';
  } else if (angle >= 337.5 && angle < 360) {
    return 'NNW';
  } else {
    return 'N';
  }
}

function WeatherDetails({ details }) {
  const wordWindDirection = convertWindDirection(details.windDirection);
  const roundedWindSpeed = Math.ceil(details.windSpeed);
  const roundedHumidity = Math.ceil(details.humidity);
  const roundedVisibility = Math.ceil(details.visibility);
  const roundedAirPressure = Math.ceil(details.airPressure);


  return (
    <div className="highlights" justify="center" align="center">
      <Heading fontSize="24px" fontFamily="Inter Tight">
        Today's Highlights
      </Heading>
      <Box display="grid" gridAutoFlow="column" gridTemplateColumns={"repeat(2, 1fr)"} gap={"20px"} mx="auto" className="highlight-row">
        <Card
          className="highlight-card"
          fontFamily="Inter Tight"
          bgColor="#1E213A"
          variant="elevated"
          width={["350px", "460px"]}
          height="230px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="slg"
          m={2}
          p={2}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <chakra.p color="#E7E7EB" fontWeight="500" fontFamily="Inter" fontSize="18px">Wind Speed</chakra.p>
          <HStack>
            <Text fontSize={"64px"} color="#E7E7EB" fontWeight="700" fontFamily="Titan One">{roundedWindSpeed.toLocaleString()}</Text>
            <Text fontSize={"24px"} fontWeight="400" fontFamily="Inter" color="#E7E7EB">mph</Text>
          </HStack>
          <HStack>
            <Icon as={WiWindDeg} style={{ transform: `rotate(${details.windDirection}deg)` }} fontSize="30px" color="#E7E7EB" />
            <Text fontSize={"24px"} fontWeight="400" color="#E7E7EB">{wordWindDirection}</Text>
          </HStack>
        </Card>

        <Card
          className="highlight-card"
          fontFamily="Inter Tight"
          bgColor="#1E213A"
          variant="elevated"
          width={["350px", "460px"]}
          height="230px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="slg"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          m={2}
          p={2}
          gap="10px"
        >
          <chakra.p color="#E7E7EB" fontWeight="500" fontFamily="Inter" fontSize="18px">Humidity</chakra.p>
          <HStack>
            <Text fontSize={"64px"} color="#E7E7EB" fontWeight="700" fontFamily="Titan One">{roundedHumidity.toLocaleString()}</Text>
            <Text fontSize={"24px"} color="#E7E7EB" fontWeight="bold" fontFamily="Inter">%</Text>
          </HStack>
          <HStack w={["300px", "350px"]} justifyContent={"space-between"} alignItems="bottom">
            <chakra.p color="#fff" fontSize="12px">0</chakra.p>
            <chakra.p color="#fff" fontSize="12px">50</chakra.p>
            <chakra.p color="#fff" fontSize="12px">100</chakra.p>
          </HStack>
          <Progress width={["300px", "350px"]} borderRadius="lg" value={details.humidity} size="lg" colorScheme="yellow" min={0} max={100} />
        </Card>
      </Box >
      <Box display="grid" gridAutoFlow="column" gridTemplateColumns={"repeat(2, 1fr)"} gap={"20px"} mx="auto" className="highlight-row">

        <Card
          className="highlight-card"
          fontFamily="Inter Tight"
          bgColor="#1E213A"
          variant="elevated"
          width={["350px", "460px"]}
          height="180px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="slg"
          m={2}
          p={2}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap={"10px"}
        >
          <chakra.p color="#E7E7EB" fontWeight="500" fontFamily="Inter" fontSize="18px">Visibility</chakra.p>
          <HStack>
            <Text fontSize={"64px"} color="#E7E7EB" fontWeight="700" fontFamily="Titan One">{roundedVisibility.toLocaleString()}</Text>
            <Text fontSize={"24px"} color="#E7E7EB">miles</Text>
          </HStack>
        </Card>

        <Card
          className="highlight-card"
          fontFamily="Inter Tight"
          bgColor="#1E213A"
          variant="elevated"
          width={["350px", "460px"]}
          height="180px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="slg"
          m={2}
          p={2}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <chakra.p color="#E7E7EB" fontWeight="500" fontFamily="Inter" fontSize="18px">Air Pressure</chakra.p>
          <HStack>
            <Text fontSize={"64px"} color="#E7E7EB" fontWeight="700" fontFamily="Titan One">{roundedAirPressure.toLocaleString()}</Text>
            <Text fontSize={"24px"} color="#E7E7EB">mb</Text>
          </HStack>
        </Card >
      </Box >
    </div >
  );
}

export default WeatherDetails;
