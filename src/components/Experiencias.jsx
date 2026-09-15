import React from 'react'
import '../utils/experiencias.css'

import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import js from '../assets/lenguajes/js.png'
import zoho from '../assets/lenguajes/zoho.png'
import reactLogo from '../assets/lenguajes/react.png'
import laravel from '../assets/lenguajes/laravel.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import apache from '../assets/lenguajes/apache.png'
import nginx from '../assets/lenguajes/nginx.png'
import terminal from '../assets/lenguajes/terminal-ubuntu.png'


export default function Experiencias() {
  return (
    <section className="contenedorExperiencias" id="experiencias">

      {/* =====================================================
          ENCABEZADO
      ===================================================== */}

      <div className="encabezadoExperiencias">

        <span className="etiquetaExperiencias">
          TRAYECTORIA
        </span>

        <h2 className="tituloExperiencias">
          Experiencias <strong>laborales</strong>
          <span className="cursor">_</span>
        </h2>

        <p className="subtituloExperiencias">
          Proyectos y experiencias en los que pude aplicar mis
          conocimientos en entornos académicos y profesionales.
        </p>

      </div>


      {/* =====================================================
          EXPERIENCIA 01
      ===================================================== */}

      <article className="experienciaItem">

        <div className="experienciaCabecera">

          <div className="experienciaNumero">
            01
          </div>

          <div className="experienciaFecha">
            Octubre 2024 — Diciembre 2025
          </div>

        </div>


        <div className="experienciaContenido">

          <div className="experienciaInfo">

            <span className="experienciaTipo">
              PROYECTO ACADÉMICO · DESARROLLO DE SOFTWARE
            </span>

            <h3>
              Sistema de Gestión de Socios
              <strong> — Clubia</strong>
            </h3>

            <h4>
              Club Central Entrerriano
            </h4>

            <p>
              Desarrollo integral de una aplicación web para la gestión
              de socios del Club Central Entrerriano, realizada como
              proyecto académico durante la etapa final de la carrera.
            </p>

            <p>
              El proyecto permitió aplicar un proceso de desarrollo
              similar al de un entorno profesional, comenzando por el
              <strong> análisis y relevamiento de requerimientos</strong>,
              entrevistas y documentación, continuando con el
              <strong> diseño, desarrollo, pruebas, implementación y
              despliegue</strong> de la aplicación.
            </p>

            <ul className="listaExperiencia">

              <li>
                Elaboración de <strong>documentación, manuales,
                guías de usuario y capacitaciones</strong>.
              </li>

              <li>
                Desarrollo de funcionalidades utilizando
                <strong> POO, PHP/Laravel y JavaScript</strong>.
              </li>

              <li>
                Modelado de datos y desarrollo de consultas
                <strong> SQL con MySQL</strong>.
              </li>

              <li>
                Diseño de lógica de negocio y
                <strong> estructuración modular</strong> del sistema.
              </li>

              <li>
                Implementación de pruebas
                <strong> unitarias, integración, sistema,
                caja negra y caja blanca</strong>.
              </li>

              <li>
                Participación en reuniones de
                <strong> relevamiento y validación de requerimientos</strong>.
              </li>

              <li>
                Configuración del entorno de desarrollo y
                <strong> despliegue en servidor Linux</strong>.
              </li>

              <li>
                Mantenimiento y actualización continua de la aplicación
                una vez implementada.
              </li>

            </ul>

          </div>


          <div className="experienciaTecnologias">

            <span className="tecnologiasEtiqueta">
              TECNOLOGÍAS UTILIZADAS
            </span>

            <div className="tecnologiasLista">

              <div className="tecnologia">
                <img src={php} alt="PHP" />
                <span>PHP</span>
              </div>

              <div className="tecnologia">
                <img src={laravel} alt="Laravel" />
                <span>Laravel</span>
              </div>

              <div className="tecnologia">
                <img src={css} alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="tecnologia">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="tecnologia">
                <img src={sql} alt="MySQL" />
                <span>MySQL</span>
              </div>

              <div className="tecnologia">
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </div>

              <div className="tecnologia">
                <img src={git} alt="Git" />
                <span>Git</span>
              </div>

              <div className="tecnologia">
                <img src={nginx} alt="Nginx" />
                <span>Nginx</span>
              </div>

              <div className="tecnologia">
                <img src={apache} alt="Apache" />
                <span>Apache</span>
              </div>

              <div className="tecnologia">
                <img src={terminal} alt="Linux Ubuntu" />
                <span>Ubuntu</span>
              </div>

            </div>

          </div>

        </div>

      </article>


      {/* =====================================================
          EXPERIENCIA 02
      ===================================================== */}

      <article className="experienciaItem">

        <div className="experienciaCabecera">

          <div className="experienciaNumero">
            02
          </div>

          <div className="experienciaFecha">
            Enero 2026 — Actualidad
          </div>

        </div>


        <div className="experienciaContenido">

          <div className="experienciaInfo">

            <span className="experienciaTipo">
              DESARROLLO WEB · MANTENIMIENTO
            </span>

            <h3>
              Sitio Web Institucional
            </h3>

            <h4>
              Asociación de Profesionales de Servicio Social — APSS
            </h4>

            <p>
              Desarrollo, implementación y mantenimiento del sitio web
              institucional de APSS, con el objetivo de modernizar su
              presencia digital y facilitar la difusión de noticias,
              actividades, documentos e información para sus afiliados.
            </p>

            <ul className="listaExperiencia">

              <li>
                Desarrollo de la interfaz utilizando
                <strong> React (JSX), JavaScript y CSS</strong>.
              </li>

              <li>
                Diseño e implementación de una experiencia
                <strong> responsive</strong> para dispositivos móviles
                y escritorio.
              </li>

              <li>
                Configuración, despliegue y administración del entorno
                de producción en <strong>Linux Ubuntu</strong>.
              </li>

              <li>
                Implementación y gestión de servicios mediante
                <strong> Node.js</strong>.
              </li>

              <li>
                Migración del sitio manteniendo el
                <strong> dominio existente</strong> hacia una nueva
                infraestructura de hosting.
              </li>

              <li>
                Configuración y administración del correo corporativo
                mediante <strong>Zoho Mail</strong>.
              </li>

              <li>
                Resolución de incidencias relacionadas con
                <strong> hosting, SSL, dominio y servicios web</strong>.
              </li>

              <li>
                Mantenimiento, actualización e implementación de
                <strong> nuevas funcionalidades</strong>.
              </li>

            </ul>

          </div>


          <div className="experienciaTecnologias">

            <span className="tecnologiasEtiqueta">
              TECNOLOGÍAS UTILIZADAS
            </span>

            <div className="tecnologiasLista">

              <div className="tecnologia">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>

              <div className="tecnologia">
                <img src={css} alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="tecnologia">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="tecnologia">
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </div>

              <div className="tecnologia">
                <img src={zoho} alt="Zoho Mail" />
                <span>Zoho Mail</span>
              </div>

              <div className="tecnologia">
                <img src={git} alt="Git" />
                <span>Git</span>
              </div>

              <div className="tecnologia">
                <img src={nginx} alt="Nginx" />
                <span>Nginx</span>
              </div>

              <div className="tecnologia">
                <img src={terminal} alt="Linux Ubuntu" />
                <span>Ubuntu</span>
              </div>

            </div>

          </div>

        </div>

      </article>

    </section>
  )
}