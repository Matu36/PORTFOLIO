import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";
import CV from "../Utils/CV.ACTUALIZADO.pdf";
import countries from "../img/PAISESNUEVO.png";
import palitos from "../img/Palitos.jpg";
import { Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import mangiare from "../img/mangiare.png";
import matu from "../img/mpichu.jpg";
import ECOMMERCE from "../img/buenProvechoNuevo.png";
import Carrousel from "../Components/Styles/Carrousel";
import SideBar from "./SideBar";
import { toast } from "react-toastify";

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
      <Box>
        <img src={matu} alt="matu" className="matu" />
      </Box>
    </Box>
  );
}
