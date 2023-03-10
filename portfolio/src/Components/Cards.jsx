import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import LogoReact from "../img/React.png"
import jScript from "../img/jScript.png"

export default function Cards() {
  return <Box>
    <Flex>
<Box
marginLeft= "100px"
  maxW="sm"
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
  <Image src= {LogoReact} alt="Card image"  />
  
    </Box>
    <Box
marginLeft= "100px"
  maxW="sm"
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
  <Image src= {jScript} alt="Card image"  />
  
    </Box>
    </Flex>
    </Box>
}
