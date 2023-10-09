import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex, Text, useColorModeValue, } from "@chakra-ui/react";

export default function NavBar() {

  
  const textColor = useColorModeValue("gray.800");
  return (
    <Box
    
  position="fixed"
  top="0"
  left="0"
  right="0"
  backgroundColor="gray.300"
  color="black"
  zIndex="999"
>
  <Flex
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    maxW="1200px"
    mx="auto"
    px={3}
  >
     <Text
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="bold"
          color={textColor}
        >
          Mi Portfolio!
        </Text>
    <Button
      as="a"
      href="#inicio"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
      backgroundColor="transparent"
  _hover={{ backgroundColor: "transparent" }} // Para quitar el color de fondo en el hover
  _active={{ backgroundColor: "transparent" }}
    >
      Inicio
    </Button>
    <Button
      as="a"
      href="#sobre-mi"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
      backgroundColor="transparent"
  _hover={{ backgroundColor: "transparent" }} // Para quitar el color de fondo en el hover
  _active={{ backgroundColor: "transparent" }}
    >
      Sobre mi
    </Button>
    <Button
      as="a"
      href="#Habilidades"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
      backgroundColor="transparent"
  _hover={{ backgroundColor: "transparent" }} // Para quitar el color de fondo en el hover
  _active={{ backgroundColor: "transparent" }}
    >
      Habilidades
    </Button>
    <Button
      as="a"
      href="#Proyectos"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
      backgroundColor="transparent"
  _hover={{ backgroundColor: "transparent" }} // Para quitar el color de fondo en el hover
  _active={{ backgroundColor: "transparent" }}
    >
      Proyectos
    </Button>
    <Button
      as="a"
      href="#Contacto"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
      backgroundColor="transparent"
  _hover={{ backgroundColor: "transparent" }} // Para quitar el color de fondo en el hover
  _active={{ backgroundColor: "transparent" }}
    >
      Contacto
    </Button>
    <DarkMode />
  </Flex>
</Box>
  )}