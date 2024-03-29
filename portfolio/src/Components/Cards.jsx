import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import LogoReact from "../img/React.png";
import jScript from "../img/jScript.png";
import css from "../img/css.png";
import chakra from "../img/chakra.png";
import express from "../img/express.png";
import postgres from "../img/postgres.jpg";
import seque from "../img/seque.png";
import git from "../img/git.png";
import PHP from "../img/PHP.jpg";
import SYMFONY from "../img/SYMFONY.jpg";

export default function Cards() {
  return (
    <Box>
      
  <Flex marginBottom={{ base: "0", md: "8" }}
  
    w="100%"
    flexDirection={{ base: "column", md: "row" }}
    justifyContent="center" 
    alignItems="flex-start"
    
  >
    <Box
      marginLeft={{base: "0", md: "100px"}}
      width="200px"
      height="200px"
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
        src={LogoReact}
        alt="Card image"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
        <Box
          marginLeft={{base: 0, md: "100px"}}
          width="200px"
          height="100%"
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
            src={jScript}
            alt="Card image"
            width="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          marginLeft={{base: 0, md: "100px"}}
          width="200px"
          height="100%"
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
          <Image src={css} alt="Card image" width="100%" objectFit="cover" />
        </Box>
        <Box
          marginLeft={{base: 0, md: "100px"}}
          width="200px"
          height="200px"
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
            src={chakra}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
      <br />
      <br />

      <Flex w="100%" 
    flexDirection={{ base: "column", md: "row" }}alignItems="flex-end"
    justifyContent="center "marginTop={{base:-850 , md: "0"}}>
        
        <Box
          marginLeft={{base: 210, md: "100px"}}
          width="200px"
          height="200px"
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
            src={express}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
          </Box>

          <Box
          marginLeft={{base: 210, md: "100px"}}
          width="200px"
          height="200px"
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
            src={postgres}
            alt="Card image"
            height= "100%"
            width="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          marginLeft={{base: 210, md: "100px"}}
          width="200px"
          height="200px"
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
            src={seque}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          marginLeft={{base: 210, md: "100px"}}
          width="200px"
          height="200px"
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
            src={git}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        
        
      </Flex>
      <br />
      <br />
      <br />

      <Flex marginBottom={{ base: "0", md: "8" }}
  
  w="100%"
  flexDirection={{ base: "column", md: "row" }}
  justifyContent="center"> 
      <Box
      marginLeft={{base: 0, md: "100px"}}
      marginTop= {{base: "-4rem", md: "0rem"}}
      alignItems={{base:"flex-start"}}
          width="200px"
          height="200px"
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
            src={PHP}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
     

      </Box>
      <Box
      marginLeft={{base: 210, md: "100px"}}
      marginTop= {{base: "-12.5rem", md: "0rem"}}
      alignItems={{base:"flex-end"}}
          width="200px"
          height="200px"
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
            src={SYMFONY}
            alt="Card image"
            width="100%"
            height="100%"
            objectFit="cover"
          />


      </Box>



      
      
      </Flex>
    </Box>
  );
}
