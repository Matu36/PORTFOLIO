import React from "react";

export default function SideBar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h5>Inicio</h5>
      <h5>Personal</h5>
      <h5>Proyectos</h5>
      <h5>Certificaciones</h5>
      <h5>Contacto</h5>
    </div>
  );
}
