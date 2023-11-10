import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";
import { Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import matu from "../img/mpichu.jpg";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
import personal from "../img/POSTMAN.png";
import DataTable from "react-data-table-component";
import { tecnologias } from "../Utils/tecnologias";
import { usePagination } from "../hooks/usePagination";

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

  const biografia = `
const biografia = [
  {
    Título: "Inicio en el Desarrollo Web",
    Descripción:
      "Actualmente me desempeño en el área del desarrollo web, tanto Backend como Frontend. Inicié mi carrera en este emocionante campo con un fuerte interés en construir soluciones tecnológicas.",
    Año: 2022
  },
  {
    Título: "Pasión por el Trabajo en Equipo",
    Descripción:
      "Me apasiona el trabajo en equipo, donde todos compartimos un mismo objetivo y nos desempeñamos arduamente en pos de conseguirlo. Creo firmemente en la colaboración y la sinergia para lograr resultados excepcionales.",
  },
  {
    Título: "Explorando Nuevas Tecnologías",
    Descripción:
      "El mundo de la programación es increíble; nada me divierte más que seguir aprendiendo tecnologías nuevas e implementarlas con el fin de alcanzar mis metas. Siempre estoy en busca de desafíos y oportunidades para mejorar mis habilidades.",
  },
];
`;

  const Biography = () => {
    return (
      <Box>
        <Text whiteSpace="pre-wrap">{biografia}</Text>
      </Box>
    );
  };

  //Paginado y searchbar  //
  const [search, setSearch] = useState("");
  const [tecno, setTecno] = useState([]);

  const tecnologia = tecnologias;

  const { paginationOptions, customStyles } = usePagination(tecnologia);

  useEffect(() => {
    filterByTecno(search);
  }, [search]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterByTecno = (value) => {
    if (!value) {
      setTecno(tecnologia);
    } else {
      const arrayCache = tecnologia.filter((tecno) =>
        tecno.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setTecno(arrayCache);
    }
  };

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "TIPO", selector: (row) => row.tipo, sortable: true },
    { name: "NOMBRE", selector: (row) => row.nombre, sortable: true },
    { name: "LENGUAJE", selector: (row) => row.lenguaje, sortable: true },
  ];

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
            Matías Pineda
          </Text>
          <Text fontSize="30px" color="yellow.400" fontWeight="bold">
            Soy un desarrollador Full Stack!
          </Text>
        </Box>
      </Flex>

      <Box className="personal">
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          color="#2B6388"
        >
          Mis Datos Personales
        </Text>
        <img src={personal} alt="personal" />

        <Text
          fontSize="18px"
          fontFamily="heading"
          lineHeight="1.6"
          textAlign="justify"
          color="gray.300"
        >
          <Biography />
        </Text>
      </Box>
      <Box className="tecnologias">
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          color="#2B6388"
        >
          Tecnologías que uso
        </Text>

        <div className="input-group mb-3 inputSearch">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por NOMBRE"
            onChange={handleOnChange}
            value={search}
            autoComplete="off"
          />
        </div>
        <DataTable
          columns={columns}
          data={tecno}
          pagination
          striped
          paginationComponentOptions={paginationOptions}
          customStyles={customStyles}
        />
      </Box>
    </Box>
  );
}
