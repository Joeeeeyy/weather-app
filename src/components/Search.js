import React, { useState } from 'react';
import { Input, HStack, InputGroup, InputLeftElement, Drawer, DrawerBody, DrawerHeader, DrawerCloseButton, DrawerOverlay, useDisclosure, DrawerContent, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import Presets from './Presets';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(city);
    setCity('');
    onClose();
  };

  return (
    <>
      <Button fontSize="16px" fontWeight="400" onClick={onOpen} _hover={{ bgColor: "#585676", color: "#fff" }}>Search for Location</Button>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left" size={"sm"}>
        <DrawerOverlay />
        <DrawerContent bgColor="#1E213A">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader color="#fff">Search for Location</DrawerHeader>
          <DrawerBody>
            <HStack>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<CiSearch />} color="#616475" />
                <Input type="text" color="white" border="1px solid #E7E7EB" placeholder="Search for city..." size="md" px="3px" value={city} onChange={(e) => setCity(e.target.value)} _placeholder={{ color: '#616475' }} outline="0" onKeyDown={handleKeyDown} />
              </InputGroup>
              <Button onClick={handleSearch} size="md" mx="3px" bgColor="#3C47E9" color="#fff">Search</Button>
            </HStack>
            <Presets setCity={onSearch} onClose={onClose} /> {/* Pass the `onSearch` and `onClose` functions to `Presets.js` */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Search;
