import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import matu from "../img/mpichu.jpg";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
import personal from "../img/POSTMAN.png";
import DataTable from "react-data-table-component";
import { tecnologias } from "../Utils/tecnologias";
import { usePagination } from "../hooks/usePagination";
import ECOMMERCE from "../img/buenProvechoNuevo.png";
import Palitos from "../img/palos.png";
import Paises from "../img/PAISESNUEVO.png";
import mangiare from "../img/mangiare.png";
import { biografia } from "../Utils/biografia";
import VENICE from "../img/veniceind.png";
import seguros from "../img/seguros.png";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    toast.info("Bienvenido a mi Portfolio!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      draggable: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      style: {
        marginTop: "10rem",
        marginLeft: "2rem",
        transform: "translateY(-50%)",
        width: "60%",
        fontWeight: "bold",
      },
    });
  }, []);

  const Biography = () => {
    return (
      <Box>
        <Text
          whiteSpace="pre-wrap"
          color="#2B6388"
          fontWeight="600"
          padding="1rem"
        >
          {biografia}
        </Text>
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
    { name: "TIPO", selector: (row) => row.tipo, sortable: true },
    { name: "NOMBRE", selector: (row) => row.nombre, sortable: true },
    { name: "LENGUAJE", selector: (row) => row.lenguaje, sortable: true },
  ];

  return (
    <Box id="inicio">
      <NavBar onToggleSidebar={toggleSidebar} />
      {isSidebarOpen ? (
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      ) : (
        <>
          <Text
            fontSize="9rem"
            position="fixed"
            marginLeft="5rem"
            opacity="0.1"
          >
            B
          </Text>
          <Text
            fontSize="9rem"
            position="fixed"
            marginTop="8rem"
            opacity="0.1"
            marginLeft="6rem"
          >
            I
          </Text>
          <Text
            fontSize="9rem"
            position="fixed"
            marginTop="16rem"
            opacity="0.1"
            marginLeft="4rem"
          >
            O
          </Text>
        </>
      )}
      <Flex
        justifyContent="space-evenly"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box marginTop={{ base: "-9rem", md: "-8rem" }}>
          <img src={matu} alt="matu" className="matu" />
        </Box>

        <Box
          // position="relative"
          z-index="1"
          marginTop={{ base: "27rem", md: "8rem" }}
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: "0", md: "-40rem" }}
        >
          <Text fontSize="50px" fontWeight="bold">
            Matías Pineda
          </Text>
          <Text fontSize="30px" color="yellow.400" fontWeight="bold">
            Soy un desarrollador Full Stack!
          </Text>
        </Box>
      </Flex>

      <Box className="personal" id="personal">
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
      <Box className="tecnologias" id="tecnologias">
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
      <br />
      <Box display="flex" justifyContent="center">
        <Text fontSize="30px" fontWeight="bold" color="#2B6388">
          Proyectos
        </Text>
      </Box>
      <Box className="proyectos" id="proyectos">
        <Flex
          display="flex"
          justifyContent="center"
          gap="1rem"
          flexDirection={{ base: "column", md: "column" }}
          marginTop="-1rem"
        >
          <Box
            className="card"
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
            className="card"
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={Paises} alt="paises" className="imgProyectos" />
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
          flexDirection={{ base: "column", md: "column" }}
          marginTop="-1rem"
        >
          <Box
            className="card"
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={Palitos} alt="palitos" className="imgProyectos" />
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
            className="card"
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={ECOMMERCE} alt="" className="imgProyectos" />
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
        <Flex
          display="flex"
          justifyContent="center"
          gap="1rem"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            className="card"
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={seguros} className="imgProyectos" alt="seguros" />

            <Text className="descripcion">
              Esta página estática de seguros fue desarrollada con un enfoque
              profesional y funcional. Incluye un formulario de contacto
              protegido con reCAPTCHA para mayor seguridad, permitiendo a los
              usuarios enviar consultas de forma confiable. La aplicación fue
              construida utilizando React para el frontend, Node.js y Sequelize
              con PostgreSQL para la gestión de datos en el backend. Todos los
              estilos fueron diseñados cuidadosamente con CSS para mantener una
              estética sobria y alineada con el rubro. Se utilizó NODEMAILER
              para el envio de emails.
            </Text>

            <Box marginTop="1rem">
              <Link
                href="https://github.com/Matu36/seguros"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGithub}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
              <Link href="https://segurospineda.com.ar">
                <Icon
                  as={FaGlobe}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
            </Box>
          </Box>

          <Box
            className="card"
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="1rem"
          >
            <img src={VENICE} className="imgProyectos" alt="" />
            <Text className="descripcion">
              VENICE Indumentaria es una tienda online de moda urbana, moderna y
              atractiva. El sitio fue desarrollado con un diseño responsive,
              pensado para todo tipo de dispositivos. Cuenta con estilos
              visuales en CSS, imágenes envolventes, un slider dinámico, carrito
              de compras con localStorage y una estética personalizada. Este
              proyecto combina funcionalidad con diseño para ofrecer una
              experiencia de compra única y estilizada.
            </Text>
            <Box marginTop="1rem">
              <Link
                href="https://github.com/Matu36/VENICEIND"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaGithub}
                  size="lg"
                  style={{ margin: "0 10px", fontSize: "30px" }}
                />
              </Link>
              <Link href="https://veniceind.vercel.app/">
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

      <br />
      <Box id="contacto" className="contacto">
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          color="#2B6388"
        >
          Contacto
        </Text>
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          color="yellow.300"
        >
          Enviame un mensaje o un correo electrónico
        </Text>
        <br />

        <Flex marginLeft={{ base: 5, md: "10px" }}>
          <Box>
            <Link
              href="https://github.com/Matu36"
              target="_blank"
              rel="noopener noreferrer"
              title="GITHUB"
            >
              <FaGithub
                size={30}
                style={{ margin: "0 10px", fontSize: "30px" }}
              />
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/matu-pineda/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <FaLinkedin
                size={30}
                style={{ margin: "0 10px", fontSize: "30px" }}
              />
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:matipineda85@live.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              title="Mail"
            >
              <FaEnvelope
                size={30}
                style={{ margin: "0 10px", fontSize: "30px" }}
              />
            </Link>
          </Box>
        </Flex>
        <br />
        <br />
      </Box>
    </Box>
  );
}
