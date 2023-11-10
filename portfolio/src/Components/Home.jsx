import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";
import { Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import mangiare from "../img/mangiare.png";
import matu from "../img/mpichu.jpg";
import ECOMMERCE from "../img/buenProvechoNuevo.png";
import Carrousel from "../Components/Styles/Carrousel";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
import personal from "../img/POSTMAN.png";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    toast.info("Bienvenido a mi Porfolio!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      draggable: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
    });
  }, []);

  return (
    <Box>
      <NavBar onToggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />

      <Flex justifyContent="space-evenly" marginLeft="-40rem">
        <Box>
          <img src={matu} alt="matu" className="matu" />
        </Box>

        <Box marginTop="15rem">
          <Text fontSize="50px" fontWeight="bold">
            {" "}
            Matías Pineda
          </Text>
          <Text fontSize="30px" color="yellow.400" fontWeight="bold">
            Soy un desarrollador Full Stack!
          </Text>
        </Box>
      </Flex>

      <Box className="personal">
        <Text fontSize="30px" fontWeight="bold" marginLeft="1rem">
          Mis Datos Personales
        </Text>
        <img src={personal} alt="personal" />
      </Box>
    </Box>
  );
}
