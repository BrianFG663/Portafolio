import '../utils/paginaProyectos.css'
import CarrucelKaren from '../components/CarrucelKaren'
import HomeButton from '../components/HomeButton'

import kotlin from '../assets/lenguajes/kotlin.png'
import jetpack from '../assets/lenguajes/jetpack.png'
import ngrok from '../assets/lenguajes/ngrok.png'
import node from '../assets/lenguajes/node.png'
import tipe from '../assets/lenguajes/type.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import terminal from '../assets/lenguajes/terminal-ubuntu.png'
import npm from '../assets/lenguajes/npm.png'
import figma from '../assets/lenguajes/Figma.png'

import creaMateria from '../assets/karen/2creaMateria.jpg'
import creaprofesor from '../assets/karen/2creaprofesor.jpg'
import login from '../assets/karen/login.PNG'

import aceptarAlumno from '../assets/karen/1aceptarAlumno.PNG'
import menuAgregar from '../assets/karen/1menuAgregar.png'
import agregarTarea from '../assets/karen/1agregarTarea.png'
import alumnosAceptados from '../assets/karen/1alumnosAceptados.PNG'

import revision from '../assets/karen/3revision.PNG'
import matriculaAceptada from '../assets/karen/3matriculaAceptada.png'
import matriculaRechazada from '../assets/karen/3matriculaRechazada.PNG'
import inicio from '../assets/karen/3inicio.PNG'
import tarea from '../assets/karen/3tarea.jpg'

import registro1 from '../assets/karen/registro1.PNG'
import registro2 from '../assets/karen/registro2.PNG'
import registro3 from '../assets/karen/registro3.PNG'
import registro4 from '../assets/karen/registro4.PNG'

import ScrollIndicator from '../components/scroll'

const adminImages = [
  creaMateria,
  creaprofesor,
  login,
  registro1,
  registro2,
  registro3,
  registro4,
]

const profesorImages = [
  aceptarAlumno,
  menuAgregar,
  agregarTarea,
  alumnosAceptados,
]

const alumnoImages = [
  revision,
  matriculaAceptada,
  matriculaRechazada,
  inicio,
  tarea,
]

export default function Karen() {
  return (
    <main className="asistenciaPagina">
      <ScrollIndicator />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="asistenciaHero">
        <div className="asistenciaHeroEtiqueta">
          PROYECTO · KAREN
        </div>

        <h1 className="asistenciaHeroTitulo">
          Conoce más sobre <strong>Karen</strong>
          <span className="asistenciaCursor">_</span>
        </h1>

        <p className="asistenciaHeroDescripcion">
          <strong>
            Aplicación móvil de gestión académica para instituciones educativas
          </strong>{' '}
          desarrollada como <strong>proyecto final de carrera</strong> por un
          equipo de <strong>10 integrantes</strong> con roles definidos en{' '}
          <strong>Backend Development</strong>,{' '}
          <strong>Mobile Development</strong>,{' '}
          <strong>UI/UX Design</strong>,{' '}
          <strong>Quality Assurance (QA)</strong> y{' '}
          <strong>Database Management</strong>, trabajando bajo una{' '}
          <strong>
            dinámica similar a un entorno de desarrollo profesional
          </strong>.
        </p>

        <p className="asistenciaHeroDescripcion">
          La plataforma permite a <strong>administradores</strong> gestionar{' '}
          <strong>materias y profesores</strong>, a los{' '}
          <strong>docentes</strong> administrar{' '}
          <strong>alumnos y tareas</strong>, y a los{' '}
          <strong>estudiantes</strong> <strong>registrarse</strong>,{' '}
          <strong>solicitar matrícula</strong> y{' '}
          <strong>consultar actividades</strong>.
        </p>

        <p className="asistenciaHeroDescripcion">
          Durante este proyecto formé parte del equipo de{' '}
          <strong>Backend Development</strong> junto a otros{' '}
          <strong>dos desarrolladores</strong>, participando en el{' '}
          <strong>diseño e implementación de la API</strong> responsable de la{' '}
          <strong>
            comunicación entre la aplicación móvil y el sistema
          </strong>
          , desarrollando <strong>endpoints, lógica de negocio</strong> y{' '}
          <strong>gestión de datos</strong>.
        </p>

        <div className="asistenciaHeroLinea" />
      </section>

      {/* =====================================================
          VISTA PRINCIPAL
          ===================================================== */}

      <section className="asistenciaVistaPrincipal">
        <div className="asistenciaSeccionEtiqueta">
          VISTA GENERAL
        </div>

        <CarrucelKaren
          images={adminImages}
          title=""
        />
      </section>

      {/* =====================================================
          TECNOLOGÍAS
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
            Tecnologías y herramientas utilizadas durante el desarrollo de la
            aplicación móvil y su infraestructura backend.
          </p>
        </div>

        <div className="asistenciaTecnologiasGrid">

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
                  src={kotlin}
                  title="Kotlin"
                  alt="Kotlin"
                />
                <span>Kotlin</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={jetpack}
                  title="Jetpack Compose"
                  alt="Jetpack Compose"
                />
                <span>Jetpack Compose</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={node}
                  title="Node.js"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={tipe}
                  title="TypeScript"
                  alt="TypeScript"
                />
                <span>TypeScript</span>
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
                  src={ngrok}
                  title="Ngrok"
                  alt="Ngrok"
                />
                <span>Ngrok</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={npm}
                  title="npm"
                  alt="npm"
                />
                <span>npm</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={figma}
                  title="Figma"
                  alt="Figma"
                />
                <span>Figma</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={terminal}
                  title="Terminal Linux"
                  alt="Terminal Linux"
                />
                <span>Linux</span>
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
            Descubre lo que hace <strong>Karen</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Una solución orientada a centralizar la gestión académica y
            facilitar la comunicación entre administradores, docentes y
            estudiantes.
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
                ADMINISTRACIÓN
              </span>

              <h3>
                Administración académica y gestión del sistema
              </h3>

              <p>
                Panel administrativo para la{' '}
                <strong>
                  gestión de materias y profesores
                </strong>
                , permitiendo la{' '}
                <strong>
                  creación y organización de la estructura académica
                </strong>{' '}
                del sistema.
              </p>

              <p>
                Incluye el{' '}
                <strong>
                  control de matrículas de alumnos
                </strong>
                , donde los administradores pueden{' '}
                <strong>
                  aprobar o rechazar solicitudes
                </strong>
                , asegurando una correcta gestión de los usuarios
                dentro de la plataforma educativa.
              </p>

            </div>

          </div>

          <CarrucelKaren
            images={adminImages}
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
                DOCENTES
              </span>

              <h3>
                Gestión de alumnos y tareas para profesores
              </h3>

              <p>
                Herramientas para que los{' '}
                <strong>
                  profesores administren sus clases
                </strong>
                , permitiendo{' '}
                <strong>
                  visualizar los alumnos aceptados en cada materia
                </strong>{' '}
                y llevar un seguimiento de los participantes.
              </p>

              <p>
                Además, incluye un sistema para{' '}
                <strong>
                  crear y publicar tareas o actividades
                </strong>
                , facilitando la{' '}
                <strong>
                  organización del trabajo académico
                </strong>{' '}
                y la comunicación de actividades dentro del curso.
              </p>

            </div>

          </div>

          <CarrucelKaren
            images={profesorImages}
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
                ESTUDIANTES
              </span>

              <h3>
                Experiencia del alumno y seguimiento académico
              </h3>

              <p>
                Los estudiantes pueden{' '}
                <strong>
                  registrarse en la plataforma
                </strong>{' '}
                y realizar la{' '}
                <strong>
                  solicitud de matrícula
                </strong>{' '}
                para acceder a las materias disponibles.
              </p>

              <p>
                El sistema permite{' '}
                <strong>
                  visualizar el estado de la matrícula
                </strong>{' '}
                (aceptada, rechazada o en revisión) y acceder a la{' '}
                <strong>
                  pantalla principal con las tareas asignadas
                </strong>
                , facilitando el seguimiento de sus actividades
                académicas.
              </p>

            </div>

          </div>

          <CarrucelKaren
            images={alumnoImages}
            title=""
          />

        </article>

      </section>

      {/* =====================================================
          CIERRE
          ===================================================== */}

      <section className="asistenciaCierre">

        <div className="asistenciaCierreLinea" />

        <span>KAREN</span>

        <p>
          Aplicación móvil desarrollada para centralizar la gestión
          académica y facilitar el seguimiento de estudiantes.
        </p>

      </section>

    </main>
  )
}