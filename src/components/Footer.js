import React from 'react';
import { HStack, chakra } from '@chakra-ui/react';

const Footer = () => {
  return (
    <div>
      <HStack>
        <chakra.p fontFamily={"30px"} textAlign={"center"} my="30px">Created by <a href="https://github.com/Joeeeeyy/weather-app">Jose Guillermo Lopez</a></chakra.p>
      </HStack>
    </div>
  )
}

export default Footer
