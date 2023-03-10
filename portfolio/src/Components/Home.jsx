import React from "react";
import NavBar from "./NavBar";
import { Text, Box, Button } from "@chakra-ui/react";
import CV from "../Utils/CV.DEVELOPER.pdf";
import Cards from "./Cards";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        margin="30px"
      >
        <Text fontSize="70px" fontWeight="extrabold">
          Matías Pineda
        </Text>
        <Text fontSize="70px" fontWeight="extrabold" color="yellow.400">
          Soy un Desarrollador Full Stack
        </Text>
<br />
<br />

        <Text margin="left" fontSize="20px" fontWeight="bold" textAlign="justify">
          Actualemente me desempeño en el área del desarrollo Web, tanto
          Backend, como Frontend. Me apasiona el trabajo en equipo, donde todos
          compartimos un mismo objetivo y nos desempeñamos arduamente en pos de
          conseguirlo. El mundo de la programación es increíble; nada me
          divierte más que seguir aprendiendo tecnologías nuevas e
          implementarlas con el fin de alcanzar mis metas.
        </Text>
      </Box>
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <Button mt={6} size="lg" marginLeft="100px" colorScheme="blue">
          Ver mi CV
        </Button>
      </a>
      <br />
      <br />
      <br />
      <br />
      <Box id="sobre-mi">
      <Text
        fontSize="50px"
        marginLeft="100px"
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="cyan.700"
      >
        Sobre mi
      </Text>
      <Text marginLeft= "100" textAlign="justify" maxWidth="1000px"
      fontWeight="bold" fontSize= "18px">
      Les cuento un poco de mi!
Desde los 18 años hasta los 23 estudie el profesorado de Educación Física en la 
Universidad Nacional de La Plata;
Al recibirme comencé a trabajar en el área de Educación; Nunca me convenció mi trabajo, 
aunque igualmente seguía perfeccionandomé (con cursos, capacitaciones y posgrados) ya 
que era mi responsabilidad.
Posteriormente, y en conjunto con Educación Física me recibí de Productor de Seguros 
(lo heredé de mi papá). Hace más de 10 años que trabajo en ambas áreas. 
Más alla de mi trabajo, siempre dio vueltas en mi cabeza el hecho de ser Programador IT. 
Para mi no es un medio, sino que es el fin en si mismo.
Me divierte. Y es la principal razón por la cual decidí sumergirme en este mundo 
apasionante.
Mantente hambriento, mantente alocado!
Ser programador es prolongar la infancia! :)
      </Text>
      </Box>
      <br />
      <br />
      <br />

      <Box id= "Habilidades">
      <Text
        fontSize="50px"
        marginLeft="100px"
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="cyan.700"
      >
        Habilidades
      </Text>
      <Text fontSize= "22px" fontWeight="bold" color="yellow.300" marginLeft= "100px">
        Estas son las tecnologías con las que he trabajado
      </Text>
      <br />
      <br />
      
      <Cards />
      

      </Box>
    </Box>
  );
}
