import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      // Si el usuario se ha desplazado más de 100 píxeles, ocultar la navbar
      if (window.pageYOffset > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    // Escuchar el evento de desplazamiento de la ventana
    window.addEventListener("scroll", handleScroll);

    // Limpiar el efecto cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ display: showNavbar ? "block" : "none" }}>
      <Box>
        <Flex justifyContent="space-between" spacing={3}>
          <Button w="30px" fontSize="20px" marginLeft="10px" width="auto">
            Inicio
          </Button>
          <Button as="a" href="#sobre-mi" w="70px" fontSize="20px" width="auto">
            Sobre mi
          </Button>
          <Button as="a" href="#Habilidades"w="70px" fontSize="20px" width="auto">
            Habilidades
          </Button>
          <Button w="50px" fontSize="20px" width="auto">
            Proyectos
          </Button>
          <Button w="50px" fontSize="20px" width="auto">
            Contacto
          </Button>
          <DarkMode />
        </Flex>
      </Box>
    </nav>
  );
}
