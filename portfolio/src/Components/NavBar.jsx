import React from "react";
import DarkMode from "../Components/DarkMode";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import bootstrap from "../img/bootstrap.png";
import express from "../img/express.png";
import js from "../img/jScript.png";
import git from "../img/git.png";
import rt from "../img/React.png";
import symfony from "../img/SYMFONY.png";
import pg from "../img/postgres.jpg";
import php from "../img/PHP.jpg";

export default function NavBar({ onToggleSidebar }) {
  const textColor = useColorModeValue("gray.800");

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      backgroundColor="#2B6388"
      color="black"
      zIndex="999"
    >
      <Flex>
        <div
          className="dark"
          style={{ marginTop: "90px", marginLeft: "-0.5rem" }}
        >
          <DarkMode />

          <button onClick={onToggleSidebar}>
            <FaHamburger
              color="white"
              style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}
            />
          </button>
        </div>

        <Box
          className="custom-carousel"
          display={{ base: "none", md: "block" }}
        >
          <img src={bootstrap} alt="Imagen 1" />
        </Box>

        <Box
          className="custom-carousel"
          display={{ base: "none", md: "block" }}
        >
          <img src={express} alt="Imagen 2" />
        </Box>

        <Box
          className="custom-carousel"
          display={{ base: "none", md: "block" }}
        >
          <img src={git} alt="Imagen 6" />
        </Box>

        <Box className="custom-carousel">
          <img src={rt} alt="Imagen 9" />
        </Box>
        <Box className="custom-carousel">
          <img src={symfony} alt="Imagen 10" />
        </Box>
        <Box
          className="custom-carousel"
          display={{ base: "none", md: "block" }}
        >
          <img src={pg} alt="Imagen 11" />
        </Box>
        <Box className="custom-carousel">
          <img src={php} alt="Imagen 12" />
        </Box>
        <Box className="custom-carousel">
          <img src={js} alt="Imagen 5" />
        </Box>
      </Flex>
    </Box>
  );
}
