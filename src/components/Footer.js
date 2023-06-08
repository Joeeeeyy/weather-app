import React from 'react';
import { chakra, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center>
      <chakra.p fontFamily="Inter Tight" fontWeight="semibold" textAlign={"center"} my="30px">Created by <a href="https://github.com/Joeeeeyy/weather-app" bgGradient='linear(to-r, #7928CA, #FF0080)' bgClip="text">Jose Guillermo Lopez</a></chakra.p>
    </Center >
  )
}

export default Footer
