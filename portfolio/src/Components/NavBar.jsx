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

  const images = [bootstrap, express, git, rt, symfony, pg, php, js];
  const allImages = [...images];

  return (
    <Box
      backgroundColor="#2B6388"
      color="black"
      zIndex="999"
      overflow="hidden"
      paddingTop="10px"
      paddingBottom="10px"
    >
      <Flex>
        <div
          className="dark"
          style={{ marginTop: "80px", marginLeft: "-0.5rem", fontSize: "20px" }}
        >
          <DarkMode />

          <button onClick={onToggleSidebar}>
            <FaHamburger
              color="white"
              style={{
                marginLeft: "1.5rem",
                marginTop: "0.5rem",
                fontSize: "18px",
              }}
            />
          </button>
        </div>

        <Box
          className="carousel-wrapper"
          position="relative"
          backgroundColor="#2B6388"
        >
          <Box className="carousel-track">
            {[...images, ...images].map((src, index) => (
              <Box key={index} className="carousel-image">
                <img src={src} alt={`Imagen ${index}`} />
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
