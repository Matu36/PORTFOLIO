import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Box
    
  position="fixed"
  top="0"
  left="0"
  right="0"
  backgroundColor="gray.300"
  color="black"
>
  <Flex
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    maxW="1200px"
    mx="auto"
    px={3}
  >
    <Button
      as="a"
      href="#inicio"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
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
    >
      Contacto
    </Button>
    <DarkMode />
  </Flex>
</Box>
  )}