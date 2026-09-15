import React, { useState, useEffect } from "react";
import "../utils/Home.css";

import AvatarInteractivo from "../components/avatar";
import lineas from "../assets/lineas.png";
import Cabecera from "../components/Cabecera";
import Botones from "../components/Botones";
import SobreMi from "../components/SobreMi";
import Experiencias from "../components/Experiencias";
import Proyectos from "../components/Proyectos";

export default function Home() {
  const texto = "Desarrollador Full-Stack Junior </>";
  const [subTitulo, setSubTitulo] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < texto.length) {
        setSubTitulo(texto.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [texto]);

  return (
    <>
      <Cabecera />

      <main>
        {/* HERO */}
        <section className="hero" id="Inicio">
          <img
            src={lineas}
            className="heroDecoracion"
            alt=""
            aria-hidden="true"
          />

          <div className="heroContenido">
            <div className="heroTexto">
              <span className="heroEtiqueta">DESARROLLO WEB</span>

              <h1 className="tituloNombre">
                Hola, mi nombre es
                <span className="nombre">Brian Nazareno Gonzalez</span>
              </h1>

              <div className="subTituloWrapper">
                <h2 className="subTitulo">
                  {subTitulo}
                  <span className="cursor">|</span>
                </h2>
              </div>

              <p className="introduccion">
                Especializado en la construcción de aplicaciones web
                <strong> robustas y escalables</strong> con
                <strong> PHP/Laravel</strong>, <strong>React</strong> y
                <strong> MySQL</strong>.
              </p>

              <p className="introduccionSecundaria">
                Enfocado en la resolución de problemas, la arquitectura de
                sistemas y las buenas prácticas de desarrollo.
              </p>

              <div className="botonesPersonales">
                <a href="#AcercaDeMi" className="botonConoceme">
                  <span>Acerca de mí</span>
                  <span className="botonFlecha">→</span>
                </a>

                <a href="#Proyectos" className="botonProyectos">
                  <span>Mis proyectos</span>
                  <span className="botonFlecha">→</span>
                </a>
              </div>

              <Botones />
            </div>

            <div className="heroVisual">
              <div className="heroMarco">
                <div className="heroMarcoLinea heroMarcoLineaSuperior" />
                <div className="heroMarcoLinea heroMarcoLineaInferior" />

                <div className="avatarContainer">
                  <AvatarInteractivo />
                </div>
              </div>

              <div className="heroIndicador">
                <span className="heroIndicadorPunto" />
                <span>Disponible para oportunidades</span>
              </div>
            </div>
          </div>

          <div className="heroScroll">
            <span>SCROLL</span>
            <div className="heroScrollLinea" />
          </div>
        </section>

        {/* SOBRE MI */}
        <section className="seccionSobreMi" id="AcercaDeMi">
          <SobreMi />
        </section>

        {/* EXPERIENCIA */}
        <Experiencias />

        {/* PROYECTOS */}
        <Proyectos />
      </main>
    </>
  );
}
