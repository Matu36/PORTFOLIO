import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex } from "@chakra-ui/react";


export default function NavBar() {
  
  return (
    
      <Box position="fixed" top="0" left="0" right="0" backgroundColor="gray.300" color="black">
        <Flex justifyContent="space-between" spacing={3}>
          
          <Button as ="a" href= "#inicio" w="30px"top="1" fontSize="20px" marginLeft="10px" width="auto">
            Inicio
          </Button>
          <Button as="a" href="#sobre-mi" w="70px" top="1" fontSize="20px" width="auto">
            Sobre mi
          </Button>
          <Button as="a" href="#Habilidades"w="70px" top="1" fontSize="20px" width="auto">
            Habilidades
          </Button>
          <Button as="a" href="#Proyectos" w="50px" fontSize="20px" top="1" width="auto">
            Proyectos
          </Button>
          <Button w="50px" fontSize="20px" top="1" width="auto">
            Contacto
          </Button>
          <DarkMode />
        </Flex>
      </Box>
    
  );
}
