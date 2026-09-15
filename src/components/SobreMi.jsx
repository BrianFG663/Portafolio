import '../utils/sobreMi.css'

import {
  ServerStackIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import nodejs from '../assets/lenguajes/node.png'
import laravel from '../assets/lenguajes/laravel.png'
import react from '../assets/lenguajes/react.png'
import sql from '../assets/lenguajes/mysql.png'
import mongo from '../assets/lenguajes/mongo.png'
import tail from '../assets/lenguajes/tail.png'
import TypeScript from '../assets/lenguajes/type.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import terminal from '../assets/lenguajes/terminal.png'
import apache from '../assets/lenguajes/apache.png'
import nginx from '../assets/lenguajes/nginx.png'

export default function SobreMi() {
  return (
    <section className="sobreMi">

      <span className="spanScroll" id="AcercaDeMi"></span>

      {/* ========================================= */}
      {/* ENCABEZADO                                */}
      {/* ========================================= */}

      <div className="sobreMiEncabezado">
        <span className="sobreMiEtiqueta">
          PERFIL PROFESIONAL
        </span>

        <h2 className="tituloSobreMi">
          Descubre más <strong>sobre mí</strong>
          <span className="cursor">_</span>
        </h2>

        <p className="subtituloSobreMi">
          Una mirada más cercana a mi formación, experiencia
          y herramientas de desarrollo.
        </p>
      </div>

      {/* ========================================= */}
      {/* PRESENTACIÓN + ESTADÍSTICAS              */}
      {/* ========================================= */}

      <div className="sobreMiPrincipal">

        <div className="presentacion">

          <div className="presentacionEtiqueta">
            <span className="presentacionLinea"></span>
            SOBRE MÍ
          </div>

          <p>
            Soy <strong>Técnico Superior en Análisis y Desarrollo
            de Software</strong>, con una <strong>visión integral
            del desarrollo de aplicaciones</strong> y curiosidad
            por entender <strong>cómo funcionan los sistemas por dentro.</strong>
          </p>

          <p>
            Me considero una persona <strong>proactiva</strong>,
            <strong> responsable</strong> y con <strong>muchas ganas
            de aprender.</strong> Me gusta <strong>analizar problemas</strong>,
            buscar soluciones claras y trabajar en equipo, compartiendo
            ideas y mejorando continuamente tanto el código como los procesos.
          </p>

          <p>
            Actualmente busco una <strong>oportunidad profesional</strong>
            donde pueda <strong>seguir creciendo</strong>, aportar desde
            el primer día y formar parte de un equipo de desarrollo,
            ya sea en modalidad remota o presencial.
          </p>

        </div>

        <div className="certificaciones">

          <div className="estadistica">
            <span className="numero">1</span>
            <span className="texto">Tecnicatura superior</span>
          </div>

          <div className="estadistica">
            <span className="numero">+5</span>
            <span className="texto">Certificaciones</span>
          </div>

          <div className="estadistica">
            <span className="numero">+8</span>
            <span className="texto">Lenguajes y frameworks</span>
          </div>

        </div>

      </div>

      {/* ========================================= */}
      {/* ÁREAS DE EXPERIENCIA                     */}
      {/* ========================================= */}

      <div className="experiencia">

        <div className="experienciaEncabezado">
          <span className="sobreMiEtiqueta">
            ÁREAS DE TRABAJO
          </span>

          <h3>
            Lo que puedo aportar
          </h3>
        </div>

        <div className="contenedorCarta">

          <article className="carta">

            <div className="cartaIcono">
              <ServerStackIcon />
            </div>

            <div className="cartaContenido">

              <span className="cartaNumero">
                01
              </span>

              <h3>
                Desarrollo <strong>Full-Stack</strong>
              </h3>

              <p>
                Integro frontend y backend en aplicaciones completas,
                implementando autenticación, roles, validaciones,
                migraciones y lógica de negocio.
              </p>

              <p>
                Mi perfil full-stack me permite comprender el proyecto
                de forma integral y aportar en distintas etapas del desarrollo.
              </p>

            </div>

          </article>

          <article className="carta">

            <div className="cartaIcono">
              <ChartBarIcon />
            </div>

            <div className="cartaContenido">

              <span className="cartaNumero">
                02
              </span>

              <h3>
                Análisis de <strong>datos</strong>
              </h3>

              <p>
                Tengo experiencia en el diseño y consulta de bases de
                datos, generación de reportes y auditorías.
              </p>

              <p>
                También utilizo Power BI para el análisis y visualización
                de información, facilitando la interpretación de métricas.
              </p>

            </div>

          </article>

        </div>

      </div>

      {/* ========================================= */}
      {/* TECNOLOGÍAS                              */}
      {/* ========================================= */}

      <div className="tecnologias">

        <div className="experienciaEncabezado">
          <span className="sobreMiEtiqueta">
            STACK TECNOLÓGICO
          </span>

          <h3>
            Tecnologías y herramientas
          </h3>
        </div>

        <div className="contenedorLenguajes">

          <div className="cartaLenguajes">

            <div className="lenguajeCabecera">
              <div className="lenguajeIcono">
                <ServerStackIcon />
              </div>

              <div>
                <span>01</span>
                <h4>Back-end</h4>
              </div>
            </div>

            <div className="listaLenguajes">
              <img src={php} title="PHP" alt="PHP" />
              <img src={laravel} title="Laravel" alt="Laravel" />
              <img src={nodejs} title="Node.js" alt="Node.js" />
              <img src={sql} title="MySQL" alt="MySQL" />
              <img src={mongo} title="MongoDB" alt="MongoDB" />
            </div>

          </div>

          <div className="cartaLenguajes">

            <div className="lenguajeCabecera">
              <div className="lenguajeIcono">
                <CodeBracketIcon />
              </div>

              <div>
                <span>02</span>
                <h4>Front-end</h4>
              </div>
            </div>

            <div className="listaLenguajes">
              <img src={html} title="HTML" alt="HTML" />
              <img src={css} title="CSS" alt="CSS" />
              <img src={tail} title="Tailwind CSS" alt="Tailwind CSS" />
              <img src={js} title="JavaScript" alt="JavaScript" />
              <img src={TypeScript} title="TypeScript" alt="TypeScript" />
              <img src={react} title="React" alt="React" />
            </div>

          </div>

          <div className="cartaLenguajes">

            <div className="lenguajeCabecera">
              <div className="lenguajeIcono">
                <UserGroupIcon />
              </div>

              <div>
                <span>03</span>
                <h4>Herramientas</h4>
              </div>
            </div>

            <div className="listaLenguajes">
              <img src={git} title="Git" alt="Git" />
              <img src={github} title="GitHub" alt="GitHub" />
              <img src={npm} title="NPM" alt="NPM" />
              <img src={terminal} title="Terminal" alt="Terminal" />
              <img src={apache} title="Apache" alt="Apache" />
              <img src={nginx} title="Nginx" alt="Nginx" />
            </div>

          </div>

        </div>

      </div>

      {/* ========================================= */}
      {/* DESCARGAS                                */}
      {/* ========================================= */}

      <div className="contenedorDescargas">

        <div className="descargasTexto">
          <span className="sobreMiEtiqueta">
            DOCUMENTACIÓN
          </span>

          <h3>
            ¿Querés conocer <strong>más sobre mí?</strong>
          </h3>

          <p>
            Podés consultar mi CV o descargar mi carta de presentación
            para conocer más sobre mi perfil profesional.
          </p>
        </div>

        <div className="botonesDescargas">

          <a
            href="/CV-BrianNazarenoGonzalez.pdf"
            download="CV-BrianNazarenoGonzalez.pdf"
            className="btn-cv"
          >
            <ArrowDownTrayIcon />
            <span>
              Descargar CV
            </span>
          </a>

          <a
            href="/CartaDePresentacion-GonzalezBrianNazareno.pdf"
            download="CartaDePresentacion-GonzalezBrianNazareno.pdf"
            className="btn-cv"
          >
            <ArrowDownTrayIcon />
            <span>
              Carta de presentación
            </span>
          </a>

        </div>

      </div>

    </section>
  )
}