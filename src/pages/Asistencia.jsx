import '../utils/paginaProyectos.css'
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel';
import HomeButton from '../components/HomeButton';

import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'

import login from '../assets/asistencia/login.PNG'
import registro from '../assets/asistencia/registro.jpg'
import notificaciones from '../assets/asistencia/notificaciones.PNG'
import cambioContrasena from '../assets/asistencia/cambioContrasena.PNG'

import agregarAdm from '../assets/asistencia/agregarAdm.PNG'
import agregarProfesor from '../assets/asistencia/agregarProfesor.PNG'
import agregarMateria from '../assets/asistencia/agregarMateria.PNG'
import agregarInstituto from '../assets/asistencia/agregarInstituto.PNG'
import inicioAdm from '../assets/asistencia/InicioAdm.PNG'

import parametros from '../assets/asistencia/parametros.PNG'
import inicioProfesor from '../assets/asistencia/inicioProfesores.PNG'
import inicioMaterias from '../assets/asistencia/iniciomaterias.PNG'
import inscripcionMaterias from '../assets/asistencia/inscripcionmaterias.PNG'
import tomarAsistencia from '../assets/asistencia/tomaAsistencia.PNG'
import edicionAsistencia from '../assets/asistencia/edicionAsistencia.PNG'
import notasExamenes from '../assets/asistencia/notasExamenes.PNG'
import edicionNotas from '../assets/asistencia/modificacionNotasAlumno.PNG'
import estadoAlumnos from '../assets/asistencia/estadoAlumnos.PNG'


import laragon from '../assets/lenguajes/laragon.png'
import ScrollIndicator from '../components/scroll'


const adminImages = [
  inicioAdm,
  agregarAdm,
  agregarProfesor,
    agregarMateria,
    agregarInstituto
];

const loginImages = [
  login,
  notificaciones,
    registro,
  cambioContrasena
];

const profesorImages = [
    inicioProfesor,
    inicioMaterias,
    parametros,
    inscripcionMaterias,
    tomarAsistencia,
    edicionAsistencia,
    notasExamenes,
    edicionNotas,
    estadoAlumnos
]




export default function Asistencia() {


  return (
    <div className="contenedorObra">
      <ScrollIndicator />
      <HomeButton></HomeButton>

      <h2 id="seccionUno">
        Conoce mas sobre <strong>Asist-o-Matic</strong><span className="cursor">_</span>
      </h2>

    <span>
        <strong>Sistema web de gestión de asistencias para instituciones educativas</strong> diseñado para administrar el control de estudiantes y el seguimiento académico, permitiendo a administradores supervisar el sistema y a los profesores gestionar <strong>asistencias, calificaciones y progreso de los alumnos</strong>, facilitando la organización y el monitoreo de la actividad educativa.
    </span>

      <AutoMarqueeCarousel images={loginImages} title="" />

      <h2 className='titulotres'>Herramientas <strong>utilizadas</strong><span className="cursor">_</span></h2>
      <div className='contenedorLenguajes'>
        <div className='cartaLenguajes'>
          <h2>Lenguajes y frameworks</h2>
          <div>
            <img src={html} title='HTML' alt="HTML" />
            <img src={css} title='CSS' alt="CSS" />
            <img src={js} title='JavaScript' alt="JavaScript" />
            <img src={php} title='PHP' alt="PHP" />
            <img src={sql} title='MySql' alt="MySQL" />
          </div>
        </div>

        <div className='cartaLenguajes'>
          <h2>Tecnologias</h2>
          <div>
            <img src={git} title='Git' alt="Git" />
            <img src={github} title='GitHub' alt="GitHub" />
            <img src={laragon} title='Laragon' alt="Laragon" />
          </div>
        </div>
      </div>


      <div className='funcionalidades' id='seccionDos'>
        <h2>Descubre lo que hace <strong>Asist-o-Matic</strong><span className="cursor">_</span></h2>

        <div className='funcionalidadesSeccion'>
            <h3>Administración del sistema educativo</h3>
            <span>
            Panel de <strong>administración centralizado</strong> que permite gestionar las principales entidades del sistema educativo. <br />
            Incluye funcionalidades de <strong>alta, baja y modificación (ABM)</strong> de <strong>administradores, profesores, materias e instituciones</strong>, facilitando la <strong>organización y control de la estructura académica</strong>. <br />
            Además, el sistema incorpora medidas de <strong>seguridad en el acceso</strong>, incluyendo el <strong>cambio obligatorio de contraseña en el primer inicio de sesión</strong> para proteger las cuentas de los usuarios.
            </span>
        </div>

        <AutoMarqueeCarousel images={adminImages} title="" />

        <div className='funcionalidadesSeccion'>
            <h3>Gestión académica y seguimiento de estudiantes</h3>
            <span>
            Herramientas para que los profesores puedan <strong>inscribirse a materias e instituciones</strong> y administrar la actividad académica. <br />
            Permite el <strong>registro de calificaciones</strong>, la <strong>toma de asistencia</strong> y la <strong>evaluación automática del estado del alumno</strong> según su desempeño. <br />
            Además, ofrece funciones para <strong>agregar, editar o eliminar estudiantes de las materias</strong> y modificar <strong>parámetros académicos</strong>, facilitando el <strong>seguimiento del progreso de cada estudiante</strong>.
            </span>
        </div>

        <AutoMarqueeCarousel images={profesorImages} title="" />

        </div>

      
    </div>
  )
}