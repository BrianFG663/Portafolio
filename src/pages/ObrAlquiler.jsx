import '../utils/paginaProyectos.css'
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel'
import HomeButton from '../components/HomeButton'

import php from '../assets/lenguajes/php.png'
import tail from '../assets/lenguajes/tail.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import laravel from '../assets/lenguajes/laravel.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import node from '../assets/lenguajes/node.png'
import laragon from '../assets/lenguajes/laragon.png'

import login from '../assets/ObrAlquiler/Login.PNG'
import registro from '../assets/ObrAlquiler/Registro.jpg'
import edicion from '../assets/ObrAlquiler/edicion.jpg'
import alertas from '../assets/ObrAlquiler/AlertasAmigables.jpg'

import historialObras from '../assets/ObrAlquiler/2HistorialDeObras.PNG'
import detalleObra from '../assets/ObrAlquiler/2DetalleDeObra.PNG'
import edicionObra from '../assets/ObrAlquiler/2edicionObra.PNG'
import registroObra from '../assets/ObrAlquiler/2registroObra.PNG'

import historialMaquinas from '../assets/ObrAlquiler/1HistorialDeMaquinas.PNG'
import detalleMaquinas from '../assets/ObrAlquiler/1DetalleDeMaquinaria.PNG'
import agregarMaquinas from '../assets/ObrAlquiler/1AgregarMaquinas.PNG'
import edicionMaquinas from '../assets/ObrAlquiler/1EdicionDeMaquinaria.PNG'
import historialMantenimiento from '../assets/ObrAlquiler/4HistorialDeMantenimientos.PNG'
import detalleMantenimiento from '../assets/ObrAlquiler/detallesDeMantenimiento.png'

import asignacion from '../assets/ObrAlquiler/3asignacionesDeMaquinariasObras.PNG'
import detalleAsignacion from '../assets/ObrAlquiler/3DetalleAsignacion.PNG'
import reporte from '../assets/ObrAlquiler/3ReporteMaquina.PNG'
import agregarAsignacion from '../assets/ObrAlquiler/3AgregarAsignacion.PNG'

import ScrollIndicator from '../components/scroll'

const asignacionImages = [
  asignacion,
  detalleAsignacion,
  reporte,
  agregarAsignacion,
]

const loginImages = [
  login,
  registro,
  edicion,
  alertas,
]

const maquinasMantenimiento = [
  historialMaquinas,
  agregarMaquinas,
  detalleMaquinas,
  edicionMaquinas,
  historialMantenimiento,
  detalleMantenimiento,
]

const obrasImages = [
  historialObras,
  detalleObra,
  registroObra,
  edicionObra,
]

export default function ObrAlquiler() {
  return (
    <main className="asistenciaPagina">
      <ScrollIndicator />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="asistenciaHero">

        <div className="asistenciaHeroEtiqueta">
          PROYECTO · OBRAALQUILER
        </div>

        <h1 className="asistenciaHeroTitulo">
          Conoce más sobre <strong>ObraAlquiler</strong>
          <span className="asistenciaCursor">_</span>
        </h1>

        <p className="asistenciaHeroDescripcion">
          <strong>
            Aplicación web de gestión para empresas de construcción
          </strong>{' '}
          diseñada para administrar proyectos de obra y el alquiler de
          maquinaria, facilitando el control y seguimiento de{' '}
          <strong>
            obras, equipos y recursos
          </strong>
          , y optimizando la gestión operativa dentro del sector.
        </p>

        <div className="asistenciaHeroLinea" />

      </section>

      {/* =====================================================
          VISTA GENERAL
          ===================================================== */}

      <section className="asistenciaVistaPrincipal">

        <div className="asistenciaSeccionEtiqueta">
          VISTA GENERAL
        </div>

        <AutoMarqueeCarousel
          images={loginImages}
          title=""
        />

      </section>

      {/* =====================================================
          STACK TECNOLÓGICO
          ===================================================== */}

      <section className="asistenciaTecnologias">

        <div className="asistenciaSeccionEncabezado">

          <span className="asistenciaSeccionEtiqueta">
            STACK TECNOLÓGICO
          </span>

          <h2 className="asistenciaSeccionTitulo">
            Herramientas <strong>utilizadas</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Tecnologías y herramientas utilizadas durante el desarrollo,
            prueba y puesta en funcionamiento de la aplicación.
          </p>

        </div>

        <div className="asistenciaTecnologiasGrid">

          {/* =========================
              LENGUAJES Y FRAMEWORKS
              ========================= */}

          <article className="asistenciaTecnologiaCard">

            <div className="asistenciaTecnologiaCardHeader">

              <span className="asistenciaTecnologiaNumero">
                01
              </span>

              <h3>
                Lenguajes y frameworks
              </h3>

            </div>

            <div className="asistenciaTecnologiaLista">

              <div className="asistenciaTecnologia">
                <img
                  src={html}
                  title="HTML"
                  alt="HTML"
                />
                <span>HTML</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={tail}
                  title="Tailwind CSS"
                  alt="Tailwind CSS"
                />
                <span>Tailwind CSS</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={js}
                  title="JavaScript"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={php}
                  title="PHP"
                  alt="PHP"
                />
                <span>PHP</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={laravel}
                  title="Laravel"
                  alt="Laravel"
                />
                <span>Laravel</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={sql}
                  title="MySQL"
                  alt="MySQL"
                />
                <span>MySQL</span>
              </div>

            </div>

          </article>

          {/* =========================
              HERRAMIENTAS
              ========================= */}

          <article className="asistenciaTecnologiaCard">

            <div className="asistenciaTecnologiaCardHeader">

              <span className="asistenciaTecnologiaNumero">
                02
              </span>

              <h3>
                Herramientas
              </h3>

            </div>

            <div className="asistenciaTecnologiaLista">

              <div className="asistenciaTecnologia">
                <img
                  src={git}
                  title="Git"
                  alt="Git"
                />
                <span>Git</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={github}
                  title="GitHub"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={npm}
                  title="NPM"
                  alt="NPM"
                />
                <span>NPM</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={laragon}
                  title="Laragon"
                  alt="Laragon"
                />
                <span>Laragon</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={node}
                  title="Node.js"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          FUNCIONALIDADES
          ===================================================== */}

      <section className="asistenciaFuncionalidades">

        <div className="asistenciaFuncionalidadesEncabezado">

          <span className="asistenciaSeccionEtiqueta">
            FUNCIONALIDADES
          </span>

          <h2 className="asistenciaSeccionTitulo">
            Descubre lo que hace <strong>ObraAlquiler</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Una solución orientada a centralizar la gestión de obras,
            maquinaria y recursos para optimizar las operaciones del sector.
          </p>

        </div>

        {/* =================================================
            FUNCIONALIDAD 01
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              01
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                OBRAS · PROYECTOS
              </span>

              <h3>
                Gestión y seguimiento de obras
              </h3>

              <p>
                Administración completa de{' '}
                <strong>
                  proyectos de construcción
                </strong>
                , permitiendo la{' '}
                <strong>
                  creación, edición y seguimiento de obras
                </strong>{' '}
                dentro del sistema.
              </p>

              <p>
                Facilita la{' '}
                <strong>
                  organización de proyectos
                </strong>
                , el{' '}
                <strong>
                  registro de información relevante
                </strong>{' '}
                y el{' '}
                <strong>
                  monitoreo del avance de las obras
                </strong>
                , centralizando la información para mejorar la{' '}
                <strong>
                  planificación y control operativo
                </strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={obrasImages}
            title=""
          />

        </article>

        {/* =================================================
            FUNCIONALIDAD 02
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              02
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                MAQUINARIA · MANTENIMIENTO
              </span>

              <h3>
                Administración de maquinaria y recursos
              </h3>

              <p>
                Sistema de{' '}
                <strong>
                  registro y control de maquinaria
                </strong>{' '}
                disponible para alquiler, permitiendo gestionar{' '}
                <strong>
                  equipos, disponibilidad y características
                </strong>.
              </p>

              <p>
                Además, incorpora un{' '}
                <strong>
                  registro de mantenimiento de maquinaria
                </strong>
                , permitiendo llevar un{' '}
                <strong>
                  historial de revisiones, reparaciones y controles técnicos
                </strong>{' '}
                para asegurar el{' '}
                <strong>
                  correcto funcionamiento
                </strong>{' '}
                y{' '}
                <strong>
                  prolongar la vida útil de los equipos
                </strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={maquinasMantenimiento}
            title=""
          />

        </article>

        {/* =================================================
            FUNCIONALIDAD 03
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              03
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                ALQUILERES · ASIGNACIONES · REPORTES
              </span>

              <h3>
                Control de alquileres y reportes
              </h3>

              <p>
                Gestión completa del{' '}
                <strong>
                  alquiler de maquinaria
                </strong>
                , con{' '}
                <strong>
                  seguimiento de períodos de alquiler
                </strong>{' '}
                y{' '}
                <strong>
                  verificación de disponibilidad de equipos
                </strong>.
              </p>

              <p>
                Permite además la{' '}
                <strong>
                  asignación de maquinaria a obras específicas
                </strong>
                , facilitando el{' '}
                <strong>
                  control del uso de equipos en cada proyecto
                </strong>.
              </p>

              <p>
                Incluye la{' '}
                <strong>
                  generación de reportes e informes
                </strong>{' '}
                sobre{' '}
                <strong>
                  obras activas
                </strong>
                ,{' '}
                <strong>
                  utilización de maquinaria
                </strong>{' '}
                y{' '}
                <strong>
                  movimiento de recursos
                </strong>
                , apoyando la{' '}
                <strong>
                  toma de decisiones administrativas
                </strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={asignacionImages}
            title=""
          />

        </article>

      </section>

      {/* =====================================================
          CIERRE
          ===================================================== */}

      <section className="asistenciaCierre">

        <div className="asistenciaCierreLinea" />

        <span>OBRAALQUILER</span>

        <p>
          Aplicación web desarrollada para centralizar la gestión de obras,
          maquinaria y recursos dentro del sector de la construcción.
        </p>

      </section>

    </main>
  )
}