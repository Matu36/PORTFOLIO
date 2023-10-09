import React from "react";
import {Image} from "@chakra-ui/react";
import "../Styles/Carrousel.css"
import LogoReact from "../../img/React.png";      
import jScript from "../../img/jScript.png";
import css from "../../img/css.png";
import chakra from "../../img/chakra.png";
import express from "../../img/express.png";
import postgres from "../../img/postgres.jpg";
import seque from "../../img/seque.png";
import git from "../../img/git.png";
import PHP from "../../img/PHP.jpg";
import SYMFONY from "../../img/SYMFONY.jpg";
import bootstrap from "../../img/bootstrap.png";
import doctrine from "../../img/doctrine.png";
import oracle from "../../img/Oracle.png";

function ImagesCarrousel() {
  const size = 200;

  return (
    <div className="carouselContainer">
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={jScript} width={size} height={size} alt="JS" />
        </div>
        <div className="content">
          <div>
            <h2>Javascript</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={PHP} width={size} height={size} alt="PHP" />
        </div>
        <div className="content">
          <div>
            <h2>PHP</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={LogoReact} width={size} height={size} alt="Reacts" />
        </div>
        <div className="content">
          <div>
            <h2>React</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={SYMFONY} width={size} height={size} alt="SYMFONY" />
        </div>
        <div className="content">
          <div>
            <h2>SYMFONY</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={PHP} width={size} height={size} alt="PHP" />
        </div>
        <div className="content">
          <div>
            <h2>PHP</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={css} width={size} height={size} alt="css" />
        </div>
        <div className="content">
          <div>
            <h2>CSS</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={chakra} width={size} height={size} alt="chakra" />
        </div>
        <div className="content">
          <div>
            <h2>CHAKRA UI</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={express} width={size} height={size} alt="express" />
        </div>
        <div className="content">
          <div>
            <h2>EXPRESS</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={postgres} width={size} height={size} alt="postgres" />
        </div>
        <div className="content">
          <div>
            <h2>POSTGRES</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={seque} width={size} height={size} alt="seque" />
        </div>
        <div className="content">
          <div>
            <h2>SEQUELIZE</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={git} width={size} height={size} alt="git" />
        </div>
        <div className="content">
          <div>
            <h2>GIT</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={oracle} width={size} height={size} alt="oracle" />
        </div>
        <div className="content">
          <div>
            <h2>ORACLE</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={doctrine} width={size} height={size} alt="doctrine" />
        </div>
        <div className="content">
          <div>
            <h2>DOCTRINE</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={bootstrap} width={size} height={size} alt="bootstrap" />
        </div>
        <div className="content">
          <div>
            <h2>BOOTSTRAP</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesCarrousel;
