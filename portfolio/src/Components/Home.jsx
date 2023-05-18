import React from "react";
import NavBar from "./NavBar";
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";
import CV from "../Utils/CV.ACTUALIZADO.pdf";
import Cards from "./Cards";
import countries from "../img/PAISESNUEVO.png";
import { Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import mangiare from "../img/mangiare.png";
import matu from "../img/Matu.png";
import ECOMMERCE from "../img/ECOMMERCE.jpg";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <br />
      <br />
      <Box 
        id="inicio"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        margin="30px"
        
      >
        <Text
        marginTop= {{ base: "30px", md: "0" }}
          fontSize={{ base: "50px", md: "70px" }}
          fontWeight="extrabold"
          
        >
          Matías Pineda
        </Text>
        <Text
          fontSize={{ base: "50px", md: "70px" }}
          fontWeight="extrabold"
          color="yellow.400"
          style={{
            "@media screen and (max-width: 768px)": {
              fontSize: "20px",
              width: "150%",

              justifyContent: "center",
              marginLeft: "10px",
            },
            maxWidth: "100%",
          }}
        >
          Soy un Desarrollador Full Stack
        </Text>
        <br />
        <br />
        <Box maxWidth="1000px">
          <Text
            margin="left"
            fontSize="20px"
            fontWeight="bold"
            textAlign="justify"
          >
            Actualemente me desempeño en el área del desarrollo Web, tanto
            Backend, como Frontend. Me apasiona el trabajo en equipo, donde
            todos compartimos un mismo objetivo y nos desempeñamos arduamente en
            pos de conseguirlo. El mundo de la programación es increíble; nada
            me divierte más que seguir aprendiendo tecnologías nuevas e
            implementarlas con el fin de alcanzar mis metas.
          </Text>
        </Box>
      </Box>
      <br />
      <Flex 
        alignItems="center"
        textAlign="center"
        marginLeft="100px"
        style={{
          "@media screen and (max-width: 768px)": {
            flexDirection:"column",
            alignItems:"center",
        textAlign:"center",
        
          },
          maxWidth: "100%",
        }}>
        <Box>
          <Image 
            src={matu}
            borderRadius="md"
            boxShadow="10px 10px 10px gray"
            opacity="0.9"
            marginTop={{base: "0", md: "0"}}
            marginLeft={{base: "-70", md: "0"}}
           >
            
          </Image>
        </Box>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <Button mt={6} 
          size="lg" 
          colorScheme="yellow"
          marginTop={{base: "-100", md: "260px"}}
          marginLeft={{base: "-70", md: "0"}}>
            <Text fontSize="25px" fontFamily="sans-serif" fontWeight="bold"
            style={{
              "@media screen and (max-width: 768px)": {
    marginTop: "0",
                justifyContent: "center",
                marginLeft: "0px",
              },
              maxWidth: "100%",
            }}>
              Ver mi CV{" "}
            </Text>
          </Button>
        </a>
      </Flex>

      <br />
      <br />
      <br />
      <Box id="sobre-mi">
        <Text
          fontSize="50px"
          marginLeft={{base: 5, md: "100px"}}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
          
        >
          Sobre mi
        </Text>
        <br />
        <Text
          marginLeft={{base: 5, md: "100px"}}
          textAlign="justify"
          maxWidth="1000px"
          fontWeight="bold"
          fontSize={{ base: "16px", md: "18px" }}
          w={{ base: "100%", md: "auto" }}
  width={{ base: "90%", md: "auto" }}
        >
          Les cuento un poco de mi! Desde los 18 años hasta los 23 estudie el
          profesorado de Educación Física en la Universidad Nacional de La
          Plata; Al recibirme comencé a trabajar en el área de Educación; Nunca
          me convenció mi trabajo, aunque igualmente seguía perfeccionandomé
          (con cursos, capacitaciones y posgrados) ya que era mi
          responsabilidad. Posteriormente, y en conjunto con Educación Física me
          recibí de Productor de Seguros (lo heredé de mi papá). Hace más de 10
          años que trabajo en ambas áreas. Más alla de mi trabajo, siempre dio
          vueltas en mi cabeza el hecho de ser Programador IT. Para mi no es un
          medio, sino que es el fin en si mismo. Me divierte. Y es la principal
          razón por la cual decidí sumergirme en este mundo apasionante.
          Mantente hambriento, mantente alocado! Ser programador es prolongar la
          infancia! :)
        </Text>
      </Box>
      <br />
      <br />
      <br />

      <Box id="Habilidades">
        <Text
          fontSize="50px"
          marginLeft={{base: 5, md: "100px"}}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Habilidades
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{base: 5, md: "100px"}}
        >
          Estas son las tecnologías con las que he trabajado
        </Text>
        <br />
        <br />

        <Cards />
        <br />
        <br />
      </Box>
      <Box id="Proyectos">
        <Text
          fontSize="50px"
          marginLeft={{base: 5, md: "100px"}}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Proyectos
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{base: 5, md: "100px"}}
        >
          Mis proyectos más recientes
        </Text>
        <br />
        <br />
        <Text fontSize="30px" fontWeight="bold" marginLeft={{base: 5, md: "100px"}}>
          Aplicación de Países
        </Text>
        <br />
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            marginLeft={{base: 5, md: "100px"}}
            marginRight="20px"
            width= {{ base: "100%", md: "800px" }}
            height={{ base: "80%", md: "400px" }}
            borderWidth="10px"
            borderRadius="2g"
            overflow="hidden"
            boxShadow="lg"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
          >
            <Image
              src={countries}
              alt="Card image"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box width={{base: "100%", md: "30%"}}>
            <Text
            marginLeft={{base: 7, md: "0"}}
              fontSize="17px"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAlign="justify"
            >
              Proyecto Individual de Henry donde debía implementar una barra
              buscadora de países; mediante información traída desde una api
              externa; a su vez, conformar una serie de filtros para la búsqueda
              de dichos países; una landing page; un paginado, y por último la
              creación de una actividad turística mediante una ruta post. Las
              tecnologías utilizadas fueron React, React-Redux, Sequelize,
              PostgreSQL, Express, CSS.
            </Text>
          </Box>
        </Flex>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{base: 5, md: "140px"}}
        >
          React - React - Redux - Node.js - Express.Js - Sequelize - PostgreSQL
        </Text>
        <br />

        <Box marginLeft={{base: 5, md: "100px"}}>
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
      <br />
      <br />
      <Text fontSize="30px" fontWeight="bold" marginLeft={{base: 5, md: "100px"}}>
        Aplicación de Comida
      </Text>
      <br />
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box
          marginLeft={{base: 5, md: "100px"}}
          marginRight="20px"
          width= {{ base: "100%", md: "800px" }}
          height={{ base: "80%", md: "400px" }}
          borderWidth="10px"
          borderRadius="2g"
          overflow="hidden"
          boxShadow="lg"
          transition="all 0.2s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
          }}
        >
          <Image
            src={mangiare}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Box width={{base: "100%", md: "35%"}}>
          <Text
          marginLeft={{base: 7, md: "0"}}
            fontSize="17px"
            fontWeight="bold"
            fontFamily="sans-serif"
            textAlign="justify"
            
          >
            Mangiar-e es una aplicación que viene a facilitarte la vida! Solo
            tenes que incluir los ingredientes que tenes a mano y Mangiar-e
            matchea las recetas disponibles que incluyan dichos ingredientes!
            También podes filtrar las recetas de acuerdo al tipo de dietas
            (vegan diet, ovo diet, etc), al precio, al rating y por orden
            alfabético. Además de esta increíble funcionalidad, podes crear tu
            propia receta e incluirla en la base de datos de Mangiar-e; de esta
            forma estarán disponibles para otros usuarios! 
          </Text>
        </Box>
      </Flex>
      <Text
        fontSize="22px"
        fontWeight="bold"
        color="yellow.300"
        marginLeft={{base: 5, md: "90px"}}
      >
        React - React - Redux - Node.js - Express.Js - Sequelize - PostgreSQL-
        Chakra UI
      </Text>
      <br />

      <Box marginLeft={{base: 5, md: "100px"}}>
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
      <br />
      <br />
      
      <Text fontSize="30px" fontWeight="bold" marginLeft={{base: 5, md: "100px"}}>
          E-Commerce
        </Text>
        <br />
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            marginLeft={{base: 5, md: "100px"}}
            marginRight="20px"
            width= {{ base: "100%", md: "800px" }}
            height={{ base: "80%", md: "400px" }}
            borderWidth="10px"
            borderRadius="2g"
            overflow="hidden"
            boxShadow="lg"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
          >
            <Image
              src={ECOMMERCE}
              alt="Card image"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box width={{base: "100%", md: "30%"}}>
            <Text
            marginLeft={{base: 7, md: "0"}}
              fontSize="17px"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAlign="justify"
            >
              Proyecto Personal que busca contemplar una plantilla genérica para distintas empresas o 
              pymes a fin de satisfacer las necesidades del cliente. Tiene integrado logueo de usuario,
              Carrito de compras con MercadoPago, Panel de administrador, Barra buscadora de comidas, 
              Filtros de comidas por categorías; Posibilidad de pago con MercadoPago y Stripe Credit Card.
            </Text>
          </Box>
        </Flex>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{base: 5, md: "140px"}}
        >
          React - React - Redux - Node.js - Express.Js - Sequelize - PostgreSQL - 
          Chakra-ui - Lottie Files - Framer Motion - AUTH0 - Stripe
        </Text>
        <br />

        <Box marginLeft={{base: 5, md: "100px"}}>
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
      
      
      <br />
      <br />
      <Box id="Contacto">
        <Text
          fontSize="50px"
          marginLeft={{base: 5, md: "100px"}}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Contacto
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{base: 5, md: "100px"}}
        >
          Enviame un mensaje o un correo electrónico
        </Text>
        <br />
        <br />
        <Flex marginLeft={{base: 5, md: "100px"}}>
          <Box>
            <Link
              href="https://github.com/Matu36"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={50}
                style={{ margin: "0 10px", fontSize: "30px" }}
              />
            </Link>
          </Box>
          <Box >
            <Link
              href="https://www.linkedin.com/in/matu-pineda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={50}
                style={{ margin: "0 10px", fontSize: "30px" }}
              />
            </Link>
          </Box>
          <Box >
            <Link
              href="mailto:matipineda85@live.com.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                size={50}
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
