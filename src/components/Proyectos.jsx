import React from "react";
import "../utils/proyectos.css";

import asistencia from "../assets/logos/Asistencia.png";
import maquina from "../assets/logos/maquina.png";
import mabra from "../assets/logos/mabra.png";
import karen from "../assets/logos/karen.jpg";
import clubia from "../assets/logos/clubia.png";
import fitar from "../assets/logos/fitar.png";

import php from "../assets/lenguajes/php.png";
import laravel from "../assets/lenguajes/laravel.png";
import node from "../assets/lenguajes/node.png";
import nginx from "../assets/lenguajes/nginx.png";
import tail from "../assets/lenguajes/tail.png";
import apache from "../assets/lenguajes/apache.png";
import terminal from "../assets/lenguajes/terminal-ubuntu.png";
import css from "../assets/lenguajes/css.png";
import html from "../assets/lenguajes/html.png";
import js from "../assets/lenguajes/js.png";
import sql from "../assets/lenguajes/mysql.png";
import laragon from "../assets/lenguajes/laragon.png";
import typescript from "../assets/lenguajes/type.png";
import expo from "../assets/lenguajes/expogo.png";
import jetpack from "../assets/lenguajes/jetpack.png";
import kotlin from "../assets/lenguajes/kotlin.png";
import ngrok from "../assets/lenguajes/ngrok.png";
import react from "../assets/lenguajes/react.png";



import { Link } from "react-router-dom";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import { FaGithub } from "react-icons/fa";

export default function Proyectos() {
  const proyectosWeb = [
    {
      id: "clubia",
      numero: "01",
      nombre: "Clubia",
      subtitulo: "Sistema de gestión de socios",
      descripcion: (
        <>
          <strong>Sistema web de gestión de socios</strong> orientado a la
          <strong> administración integral</strong> de las actividades del
          club, con foco en el <strong>control de socios</strong>,
          <strong> gestión de actividades</strong> y
          <strong> facturación</strong>.
        </>
      ),
      imagen: clubia,
      claseImagen: "proyectoImagenClubia",
      claseOverlay: "proyectoOverlayClubia",
      tecnologias: [
        [html, "HTML"],
        [css, "CSS"],
        [laravel, "Laravel"],
        [php, "PHP"],
        [js, "JavaScript"],
        [sql, "MySQL"],
        [nginx, "Nginx"],
        [apache, "Apache"],
        [terminal, "Ubuntu"],
      ],
      ruta: "/Clubia",
      destacado: true,
    },

    {
      id: "obralquiler",
      numero: "02",
      nombre: "ObrAlquiler",
      subtitulo: "Gestión de obras y maquinaria",
      descripcion: (
        <>
          <strong>Aplicación web</strong> diseñada para
          <strong> gestionar proyectos de construcción</strong> y el
          <strong> alquiler de maquinaria</strong>, facilitando el control y
          seguimiento de <strong>obras, equipos y recursos</strong>.
        </>
      ),
      imagen: maquina,
      claseImagen: "proyectoImagenMaquinaria",
      claseOverlay: "proyectoOverlayMaquinaria",
      tecnologias: [
        [html, "HTML"],
        [tail, "Tailwind CSS"],
        [laravel, "Laravel"],
        [php, "PHP"],
        [js, "JavaScript"],
        [sql, "MySQL"],
        [laragon, "Laragon"],
      ],
      github: "https://github.com/BrianFG663/ObraAlquiler",
      ruta: "/ObrAlquiler",
    },

    {
      id: "mabra",
      numero: "03",
      nombre: "MabraOps",
      subtitulo: "Sistema de gestión de negocio",
      descripcion: (
        <>
          <strong>Sistema web de gestión de negocio</strong> orientado a la
          administración de <strong>operaciones comerciales</strong>, con foco
          en el <strong>control</strong>, <strong>trazabilidad</strong> y
          <strong> automatización de procesos</strong>.
        </>
      ),
      imagen: mabra,
      claseImagen: "proyectoImagenMabra",
      claseOverlay: "proyectoOverlayMabra",
      tecnologias: [
        [html, "HTML"],
        [css, "CSS"],
        [laravel, "Laravel"],
        [php, "PHP"],
        [js, "JavaScript"],
        [sql, "MySQL"],
        [apache, "Apache"],
      ],
      github: "https://github.com/BrianFG663/Mabra-descartables-app",
      ruta: "/MabraOps",
    },

    {
      id: "asistencia",
      numero: "04",
      nombre: "Asist-o-Matic",
      subtitulo: "Gestión de asistencias educativas",
      descripcion: (
        <>
          <strong>Sistema web de gestión de asistencias</strong> para
          <strong> instituciones educativas</strong>, permitiendo a
          administradores y docentes controlar{" "}
          <strong>clases, asistencias y calificaciones</strong> de forma simple
          y eficiente.
        </>
      ),
      imagen: asistencia,
      claseImagen: "proyectoImagenAsistencia",
      claseOverlay: "proyectoOverlayAsistencia",
      tecnologias: [
        [html, "HTML"],
        [css, "CSS"],
        [php, "PHP"],
        [js, "JavaScript"],
        [sql, "MySQL"],
        [laragon, "Laragon"],
      ],
      github: "https://github.com/BrianFG663/Sistema-de-asistencias",
      ruta: "/Asistencia",
      
    },
  ];

  const proyectosMobile = [
    {
      id: "karen",
      numero: "01",
      nombre: "Karen",
      subtitulo: "Aplicación móvil de gestión académica",
      descripcion: (
        <>
          <strong>Aplicación móvil de gestión académica</strong> para
          <strong> instituciones educativas</strong>, orientada a
          administradores, docentes y alumnos para gestionar
          <strong> materias, clases y tareas</strong>.
        </>
      ),
      imagen: karen,
      claseImagen: "proyectoImagenKaren",
      claseOverlay: "proyectoOverlayKaren",
      tecnologias: [
        [jetpack, "Jetpack Compose"],
        [kotlin, "Kotlin + Java"],
        [node, "Node.js"],
        [typescript, "TypeScript"],
        [sql, "MySQL"],
        [ngrok, "Ngrok"],
      ],
      ruta: "/karen",
    },

    {
      id: "fitar",
      numero: "02",
      nombre: "FitAR",
      subtitulo: "Aplicación para control total de tu entrenamiento",
      descripcion: (
        <>
          <strong>Aplicación móvil de entrenamiento</strong> orientada a
          <strong> crear y gestionar rutinas de ejercicio</strong>, permitiendo
          a los usuarios organizar <strong>ejercicios, entrenamientos y registros</strong>,
          además de realizar un <strong>seguimiento de su progreso y estadísticas</strong>.
        </>
      ),
      imagen: fitar,
      claseImagen: "proyectoImagenFitAR",
      claseOverlay: "proyectoOverlayFitAR",
      tecnologias: [
        [react, "React-native"],   
        [typescript, "TypeScript"],
        [node, "Node.js"],
        [css, "Css"],
        [js, "JavaScript"],
        [expo, "Expo"],

      ],
      ruta: "/fitar",
      destacado: true,
    },
  ];

  const renderProyecto = (proyecto) => (
    <article
      key={proyecto.id}
      className={`proyecto ${
        proyecto.destacado ? "proyectoDestacado" : ""
      }`}
    >
      <div className={`proyectoImagen ${proyecto.claseImagen}`}>
        <img
          src={proyecto.imagen}
          alt={`Vista previa de ${proyecto.nombre}`}
        />

        <div className={`proyectoOverlay ${proyecto.claseOverlay}`}>
          <div className="botonesProyecto">
            {proyecto.github && (
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="botonProyecto"
                aria-label={`Ver código de ${proyecto.nombre} en GitHub`}
                title="Ver código en GitHub"
              >
                <FaGithub />
              </a>
            )}

            <Link
              to={proyecto.ruta}
              className="botonProyecto"
              aria-label={`Ver detalles de ${proyecto.nombre}`}
              title="Ver proyecto"
            >
              <ArrowTopRightOnSquareIcon />
            </Link>
          </div>
        </div>

        {proyecto.destacado && (
          <span className="proyectoBadge">
            PROYECTO DESTACADO
          </span>
        )}
      </div>

      <div className="conenedorInformacion">
        <div className="proyectoTituloFila">
          <span className="proyectoNumero">
            {proyecto.numero}
          </span>

          <div>
            <h3 className="tituloAplicacion">
              {proyecto.nombre}
            </h3>

            <span className="proyectoSubtitulo">
              {proyecto.subtitulo}
            </span>
          </div>
        </div>

        <p className="proyectoDescripcion">
          {proyecto.descripcion}
        </p>

        <div className="tecnologiasProyecto">
          <div className="tecnologiasProyectoEncabezado">
            <CodeBracketIcon />
            <span>TECNOLOGÍAS</span>
          </div>

          <div className="lenguajes">
            {proyecto.tecnologias.map(([imagen, nombre]) => (
              <div
                className="tecnologiaProyecto"
                key={nombre}
                title={nombre}
              >
                <img src={imagen} alt={nombre} />
                <span>{nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section id="Proyectos" className="contenedorProyecto">

      <div className="encabezadoProyectos">
        <span className="etiquetaProyectos">
          PORTAFOLIO
        </span>

        <h2 className="tituloProyectos">
          Mis proyectos <strong>destacados</strong>
          <span className="cursor">_</span>
        </h2>

        <p className="subtituloProyectos">
          Una selección de proyectos en los que participé durante mi
          formación y experiencia como desarrollador.
        </p>
      </div>


      {/* =====================================================
          PROYECTOS WEB
      ====================================================== */}

      <div className="categoriaProyectos">

        <div className="encabezadoCategoriaProyectos">
          <span className="numeroCategoriaProyectos">
            01
          </span>

          <div>
            <span className="etiquetaCategoriaProyectos">
              DESARROLLO
            </span>

            <h3>
              Proyectos <strong>Web</strong>
            </h3>

            <p>
              Aplicaciones web desarrolladas para la gestión de
              procesos, información y operaciones.
            </p>
          </div>
        </div>

        <div className="proyectos">
          {proyectosWeb.map(renderProyecto)}
        </div>

      </div>


      {/* =====================================================
          PROYECTOS MOBILE
      ====================================================== */}

      <div className="categoriaProyectos">

        <div className="encabezadoCategoriaProyectos">
          <span className="numeroCategoriaProyectos">
            02
          </span>

          <div>
            <span className="etiquetaCategoriaProyectos">
              DESARROLLO
            </span>

            <h3>
              Proyectos <strong>Mobile</strong>
            </h3>

            <p>
              Aplicaciones móviles enfocadas en experiencias
              de usuario y gestión desde dispositivos.
            </p>
          </div>
        </div>

        <div className="proyectos">
          {proyectosMobile.map(renderProyecto)}
        </div>

      </div>

    </section>
  );
}