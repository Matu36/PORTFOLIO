import { Button } from "@chakra-ui/button";
import React from "react";

export default function SideBar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div>
        <Button
          as="a"
          href="#inicio"
          marginTop="1rem"
          width="100%"
          onClick={toggleSidebar}
        >
          <h5>Inicio </h5>
        </Button>
      </div>
      <div>
        <Button
          as="a"
          href="#personal"
          marginTop="2rem"
          width="100%"
          onClick={toggleSidebar}
        >
          <h5>Personal</h5>
        </Button>
      </div>
      <div>
        <Button
          marginTop="2rem"
          as="a"
          href="#tecnologias"
          width="100%"
          onClick={toggleSidebar}
        >
          <h5>Tecnologías</h5>
        </Button>
      </div>
      <div>
        <Button
          marginTop="2rem"
          as="a"
          href="#proyectos"
          width="100%"
          onClick={toggleSidebar}
        >
          <h5>Proyectos</h5>
        </Button>
      </div>

      <div>
        <Button
          marginTop="2rem"
          as="a"
          href="#contacto"
          width="100%"
          onClick={toggleSidebar}
        >
          <h5>Contacto</h5>
        </Button>
      </div>
    </div>
  );
}
