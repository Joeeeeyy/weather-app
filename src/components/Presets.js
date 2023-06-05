import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

function Presets({ setCity, onClose }) {
  const cities = [
    {
      id: 1,
      title: "Burbank",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "London",
    },
  ];

  const handleCityClick = (city) => {
    setCity(city);
    onClose(); // Close the drawer
  };

  return (
    <Box display="flex" flexDirection="column" gap="30px" mt="40px">
      {cities.map((city) => (
        <Button key={city.id} variant="outline" h="80px" color="white" rightIcon={<ChevronRightIcon />} onClick={() => handleCityClick(city.title)} _hover={{ color: "#16162a", bgColor: "white" }}>
          {city.title}
        </Button>
      ))
      }
    </Box >
  );
}

export default Presets;

