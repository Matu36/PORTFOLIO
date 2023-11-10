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
import ECOMMERCE from "../img/ECOMMERCE.jpg";
import Palitos from "../img/palos.png";
import Paises from "../img/PAISESNUEVO.png";
import mangiare from "../img/mangiare.png";

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

        <Box marginTop="15rem" id="inicio">
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
          color="gray.400"
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
          className="striped"
          columns={columns}
          data={tecno}
          pagination
          striped
          paginationComponentOptions={paginationOptions}
          customStyles={customStyles}
        />
      </Box>
      <Box className="proyectos">
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          color="#2B6388"
        >
          Proyectos
        </Text>
        <Flex
          display="flex"
          justifyContent="center"
          gap="1rem"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={mangiare} alt="mangiare" />
            <Text className="descripcion">
              Mangiar-e es una aplicación que viene a facilitarte la vida! Solo
              tenes que incluir los ingredientes que tenes a mano y Mangiar-e
              matchea las recetas disponibles que incluyan dichos ingredientes!
              También podes filtrar las recetas de acuerdo al tipo de dietas
              (vegan diet, ovo diet, etc), al precio, al rating y por orden
              alfabético. Además de esta increíble funcionalidad, podes crear tu
              propia receta e incluirla en la base de datos de Mangiar-e; de
              esta forma estarán disponibles para otros usuarios!
            </Text>
            <Box marginTop="1rem">
              <Link
                href="https://github.com/Matu36/MANGIARE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGithub}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
              <Link
                href="https://mangiare.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGlobe}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
            </Box>
          </Box>

          <Box
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={Paises} alt="paises" />
            <Text className="descripcion">
              Proyecto Individual de Henry donde debía implementar una barra
              buscadora de países; mediante información traída desde una api
              externa; a su vez, conformar una serie de filtros para la búsqueda
              de dichos países; una landing page; un paginado, y por último la
              creación de una actividad turística mediante una ruta post. Las
              tecnologías utilizadas fueron React, React-Redux, Sequelize,
              PostgreSQL, Express, CSS.
            </Text>
            <Box marginTop="1rem">
              <Link
                href="https://github.com/Matu36/PI-Countries-mainACTUALIZADO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGithub}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
              <Link href=" https://fronttpais.onrender.com/">
                <Icon
                  as={FaGlobe}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
            </Box>
          </Box>
        </Flex>

        <Flex
          display="flex"
          justifyContent="center"
          gap="1rem"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={Palitos} alt="palitos" />
            <Text className="descripcion">
              Con uno de mis mejores amigos y compañero de banco, en la
              secundaria jugábamos al juego de los palitos; A modo de recuerdo y
              de aprendizaje, quise recrear en código el juego que tanto nos
              divertía. El objetivo del juego es que cada participante va
              sacando la cantidad de palitos que desea en sentido horizontal;
              mueve uno, mueve otro; al que le queda un palito pierde!
            </Text>
            <Box marginTop="1rem">
              <Link href="https://matu36.github.io/PalosHTML/">
                <Icon
                  as={FaGlobe}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
            </Box>
          </Box>

          <Box
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={ECOMMERCE} alt="" />
            <Text className="descripcion">
              E-COMMERCE: Proyecto Personal que busca contemplar una plantilla
              genérica para distintas empresas o pymes a fin de satisfacer las
              necesidades del cliente. Tiene integrado logueo de usuario,
              Carrito de compras con MercadoPago, Panel de administrador, Barra
              buscadora de comidas, Filtros de comidas por categorías;
              Posibilidad de pago con MercadoPago y Stripe Credit Card.
            </Text>
            <Box marginTop="1rem">
              <Link
                href="https://github.com/Matu36/Pymes-Software-Integration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGithub}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
              <Link href="https://buenprovecho.vercel.app/">
                <Icon
                  as={FaGlobe}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
