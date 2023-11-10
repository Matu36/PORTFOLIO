import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import bootstrap from "../img/bootstrap.png";
import express from "../img/express.png";
import chakra from "../img/chakra.jpg";
import js from "../img/jScript.png";
import git from "../img/git.png";
import css from "../img/css.png";
import oracle from "../img/Oracle.png";
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

        <div className="custom-carousel">
          <img src={bootstrap} alt="Imagen 1" />
        </div>

        <div className="custom-carousel">
          <img src={express} alt="Imagen 2" />
        </div>
        {/* <div className="custom-carousel">
          <img src={chakra} alt="Imagen 4" />
        </div> */}

        <div className="custom-carousel">
          <img src={git} alt="Imagen 6" />
        </div>
        {/* <div className="custom-carousel">
          <img src={css} alt="Imagen 7" />
        </div> */}
        {/* <div className="custom-carousel">
          <img src={oracle} alt="Imagen 8" />
        </div> */}
        <div className="custom-carousel">
          <img src={rt} alt="Imagen 9" />
        </div>
        <div className="custom-carousel">
          <img src={symfony} alt="Imagen 10" />
        </div>
        <div className="custom-carousel">
          <img src={pg} alt="Imagen 11" />
        </div>
        <div className="custom-carousel">
          <img src={php} alt="Imagen 12" />
        </div>
        <div className="custom-carousel">
          <img src={js} alt="Imagen 5" />
        </div>
      </Flex>
    </Box>
  );
}
