
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel'
import HomeButton from '../components/HomeButton'
import ScrollIndicator from '../components/scroll'

import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import laragon from '../assets/lenguajes/laragon.png'

import login from '../assets/asistencia/login.PNG'
import registro from '../assets/asistencia/registro.jpg'
import notificaciones from '../assets/asistencia/notificaciones.PNG'
import cambioContrasena from '../assets/asistencia/cambioContrasena.PNG'

import agregarAdm from '../assets/asistencia/agregarAdm.PNG'
import agregarProfesor from '../assets/asistencia/agregarProfesor.PNG'
import agregarMateria from '../assets/asistencia/agregarMateria.PNG'
import agregarInstituto from '../assets/asistencia/agregarInstituto.PNG'
import inicioAdm from '../assets/asistencia/InicioAdm.PNG'

import parametros from '../assets/asistencia/parametroS.PNG'
import inicioProfesor from '../assets/asistencia/inicioprofesores.PNG'
import inicioMaterias from '../assets/asistencia/iniciomaterias.PNG'
import inscripcionMaterias from '../assets/asistencia/inscripcionmaterias.PNG'
import tomarAsistencia from '../assets/asistencia/tomaAsistencia.PNG'
import edicionAsistencia from '../assets/asistencia/edicionAsistencia.PNG'
import notasExamenes from '../assets/asistencia/notasExamenes.PNG'
import edicionNotas from '../assets/asistencia/modificacionNotasAlumno.PNG'
import estadoAlumnos from '../assets/asistencia/estadoAlumnos.PNG'

import '../utils/paginaProyectos.css'

const asistenciaLoginImages = [
  login,
  notificaciones,
  registro,
  cambioContrasena,
]

const asistenciaAdminImages = [
  inicioAdm,
  agregarAdm,
  agregarProfesor,
  agregarMateria,
  agregarInstituto,
]

const asistenciaProfesorImages = [
  inicioProfesor,
  inicioMaterias,
  parametros,
  inscripcionMaterias,
  tomarAsistencia,
  edicionAsistencia,
  notasExamenes,
  edicionNotas,
  estadoAlumnos,
]

export default function Asistencia() {
  return (
    <main className="asistenciaPagina">
      <ScrollIndicator />

      {/* HERO */}
      <section className="asistenciaHero">
        <div className="asistenciaHeroEtiqueta">
          PROYECTO · ASIST-O-MATIC
        </div>

        <h1 className="asistenciaHeroTitulo">
          Conoce más sobre <strong>Asist-o-Matic</strong>
          <span className="asistenciaCursor">_</span>
        </h1>

        <p className="asistenciaHeroDescripcion">
          <strong>Sistema web de gestión de asistencias para instituciones
          educativas</strong> diseñado para administrar el control de
          estudiantes y el seguimiento académico, permitiendo a
          administradores supervisar el sistema y a los profesores gestionar
          <strong> asistencias, calificaciones y progreso de los alumnos</strong>,
          facilitando la organización y el monitoreo de la actividad educativa.
        </p>

        <div className="asistenciaHeroLinea" />
      </section>

      {/* CAPTURAS PRINCIPALES */}
      <section className="asistenciaVistaPrincipal">
        <div className="asistenciaSeccionEtiqueta">
          VISTA GENERAL
        </div>

        <AutoMarqueeCarousel
          images={asistenciaLoginImages}
          title=""
        />
      </section>

      {/* TECNOLOGÍAS */}
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
            Tecnologías utilizadas para desarrollar, probar y mantener
            la aplicación.
          </p>
        </div>

        <div className="asistenciaTecnologiasGrid">

          <article className="asistenciaTecnologiaCard">
            <div className="asistenciaTecnologiaCardHeader">
              <span className="asistenciaTecnologiaNumero">01</span>
              <h3>Lenguajes y frameworks</h3>
            </div>

            <div className="asistenciaTecnologiaLista">
              <div className="asistenciaTecnologia">
                <img src={html} alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={css} alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={php} alt="PHP" />
                <span>PHP</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={sql} alt="MySQL" />
                <span>MySQL</span>
              </div>
            </div>
          </article>

          <article className="asistenciaTecnologiaCard">
            <div className="asistenciaTecnologiaCardHeader">
              <span className="asistenciaTecnologiaNumero">02</span>
              <h3>Herramientas</h3>
            </div>

            <div className="asistenciaTecnologiaLista">
              <div className="asistenciaTecnologia">
                <img src={git} alt="Git" />
                <span>Git</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </div>

              <div className="asistenciaTecnologia">
                <img src={laragon} alt="Laragon" />
                <span>Laragon</span>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="asistenciaFuncionalidades" id="asistencia-seccion-funcionalidades">

        <div className="asistenciaFuncionalidadesEncabezado">
          <span className="asistenciaSeccionEtiqueta">
            FUNCIONALIDADES
          </span>

          <h2 className="asistenciaSeccionTitulo">
            Descubre lo que hace <strong>Asist-o-Matic</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Una solución orientada a simplificar la administración
            educativa y centralizar el seguimiento académico.
          </p>
        </div>

        {/* FUNCIONALIDAD 01 */}
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
                Administración del sistema educativo
              </h3>

              <p>
                Panel de <strong>administración centralizado</strong> que
                permite gestionar las principales entidades del sistema
                educativo.
              </p>

              <p>
                Incluye funcionalidades de <strong>alta, baja y modificación
                (ABM)</strong> de <strong>administradores, profesores,
                materias e instituciones</strong>, facilitando la
                <strong> organización y control de la estructura académica</strong>.
              </p>

              <p>
                Además, el sistema incorpora medidas de
                <strong> seguridad en el acceso</strong>, incluyendo el
                <strong> cambio obligatorio de contraseña en el primer inicio
                de sesión</strong> para proteger las cuentas de los usuarios.
              </p>
            </div>
          </div>

          <AutoMarqueeCarousel
            images={asistenciaAdminImages}
            title=""
          />

        </article>

        {/* FUNCIONALIDAD 02 */}
        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">
            <div className="asistenciaFuncionalidadNumero">
              02
            </div>

            <div>
              <span className="asistenciaFuncionalidadEtiqueta">
                SEGUIMIENTO ACADÉMICO
              </span>

              <h3>
                Gestión académica y seguimiento de estudiantes
              </h3>

              <p>
                Herramientas para que los profesores puedan
                <strong> inscribirse a materias e instituciones</strong> y
                administrar la actividad académica.
              </p>

              <p>
                Permite el <strong>registro de calificaciones</strong>,
                la <strong>toma de asistencia</strong> y la
                <strong> evaluación automática del estado del alumno</strong>
                según su desempeño.
              </p>

              <p>
                Además, ofrece funciones para
                <strong> agregar, editar o eliminar estudiantes de las
                materias</strong> y modificar
                <strong> parámetros académicos</strong>, facilitando el
                <strong> seguimiento del progreso de cada estudiante</strong>.
              </p>
            </div>
          </div>

          <AutoMarqueeCarousel
            images={asistenciaProfesorImages}
            title=""
          />

        </article>

      </section>

      {/* CIERRE */}
      <section className="asistenciaCierre">
        <div className="asistenciaCierreLinea" />

        <span>ASIST-O-MATIC</span>

        <p>
          Sistema desarrollado para centralizar la gestión y el
          seguimiento de la actividad educativa.
        </p>
      </section>

    </main>
  )
}