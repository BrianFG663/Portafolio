import '../utils/paginaProyectos.css'
import CarrucelKaren from '../components/CarrucelKaren';
import HomeButton from '../components/HomeButton';

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
import login from '../assets/karen/login.png'

import aceptarAlumno from '../assets/karen/1aceptarAlumno.png'
import menuAgregar from '../assets/karen/1menuAgregar.png'
import agregarTarea from '../assets/karen/1agregarTarea.png'
import alumnosAceptados from '../assets/karen/1alumnosAceptados.png'


import revision from '../assets/karen/3revision.png'
import matriculaAceptada from '../assets/karen/3matriculaAceptada.png'
import matriculaRechazada from '../assets/karen/3matriculaRechazada.png'
import inicio from '../assets/karen/3inicio.png'
import tarea from '../assets/karen/3tarea.jpg'

import registro1 from '../assets/karen/registro1.png'
import registro2 from '../assets/karen/registro2.png'
import registro3 from '../assets/karen/registro3.png'
import registro4 from '../assets/karen/registro4.png'



import laragon from '../assets/lenguajes/laragon.png'
import ScrollIndicator from '../components/scroll'




const adminImages = [
  creaMateria,
  creaprofesor,
  login,
  registro1,
  registro2,
  registro3,
  registro4
];

const profesorImages = [
  aceptarAlumno,
  menuAgregar,
  agregarTarea,
  alumnosAceptados
];


const alumnoImages = [
    revision,
    matriculaAceptada,
    matriculaRechazada,
    inicio,
    tarea
];




export default function Karen() {


  return (
    <div className="contenedorObra">
      <ScrollIndicator />
      <HomeButton></HomeButton>

      <h2 id="seccionUno">
        Conoce mas sobre <strong>Karen</strong><span className="cursor">_</span>
      </h2>

    <span id="karen">
        <strong>Aplicación móvil de gestión académica para instituciones educativas</strong> desarrollada como <strong>proyecto final de carrera</strong> por un equipo de <strong>10 integrantes</strong> con roles definidos en <strong>Backend Development</strong>, <strong>Mobile Development</strong>, <strong>UI/UX Design</strong>, <strong>Quality Assurance (QA)</strong> y <strong>Database Management</strong>, trabajando bajo una <strong>dinámica similar a un entorno de desarrollo profesional</strong>.  
        La plataforma permite a <strong>administradores</strong> gestionar <strong>materias y profesores</strong>, a los <strong>docentes</strong> administrar <strong>alumnos y tareas</strong>, y a los <strong>estudiantes</strong> <strong>registrarse</strong>, <strong>solicitar matrícula</strong> y <strong>consultar actividades</strong>.  
        durante este proyecto formé parte del equipo de <strong>Backend Development</strong> junto a otros <strong>dos desarrolladores</strong>, participando en el <strong>diseño e implementación de la API</strong> responsable de la <strong>comunicación entre la aplicación móvil y el sistema</strong>, desarrollando <strong>endpoints, lógica de negocio y gestión de datos</strong>.
    </span>


      <h2 id='karentitulo' className='titulotres'>Herramientas <strong>utilizadas</strong><span className="cursor">_</span></h2>
      <div id='karenlenguajes' className='contenedorLenguajes'>
        <div className='cartaLenguajes'>
          <h2>Lenguajes y frameworks</h2>
          <div>
            <img src={kotlin} title='Kotlin' alt="Kotlin" />
            <img src={jetpack} title='Jetpack Compose' alt="Jetpack Compose" />
            <img src={node} title='Node.js' alt="Node.js" />
            <img src={tipe} title='TypeScript' alt="typeScript" />
            <img src={sql} title='MySql' alt="MySql" />
          </div>
        </div>

        <div className='cartaLenguajes'>
          <h2>Tecnologias</h2>
          <div>
            <img src={git} title='Git' alt="Git" />
            <img src={github} title='GitHub' alt="GitHub" />
            <img src={ngrok} title='Ngrok' alt="ngrok" />
            <img src={npm} title='npm' alt="npm" />
            <img src={figma} title='Figma' alt="Figma" />
            <img src={terminal} title='Terminal Linux' alt="Terminal" />
          </div>
        </div>
      </div>


      <div className='funcionalidades' id='seccionDos'>
        <h2>Descubre lo que hace <strong>Karen</strong><span className="cursor">_</span></h2>

        <div className='funcionalidadesSeccion'>
            <h3>Administración académica y gestión del sistema</h3>
            <span>
            Panel administrativo para la <strong>gestión de materias y profesores</strong>, permitiendo la <strong>creación y organización de la estructura académica</strong> del sistema. <br />
            Incluye el <strong>control de matrículas de alumnos</strong>, donde los administradores pueden <strong>aprobar o rechazar solicitudes</strong>, asegurando una correcta gestión de los usuarios dentro de la plataforma educativa.
            </span>
        </div>

        <CarrucelKaren images={adminImages} title="" />

        <div className='funcionalidadesSeccion'>
            <h3>Gestión de alumnos y tareas para profesores</h3>
            <span>
            Herramientas para que los <strong>profesores administren sus clases</strong>, permitiendo <strong>visualizar los alumnos aceptados en cada materia</strong> y llevar un seguimiento de los participantes. <br />
            Además, incluye un sistema para <strong>crear y publicar tareas o actividades</strong>, facilitando la <strong>organización del trabajo académico</strong> y la comunicación de actividades dentro del curso.
            </span>
        </div>

        <CarrucelKaren images={profesorImages} title="" />

        <div className='funcionalidadesSeccion'>
            <h3>Experiencia del alumno y seguimiento académico</h3>
            <span>
            Los estudiantes pueden <strong>registrarse en la plataforma</strong> y realizar la <strong>solicitud de matrícula</strong> para acceder a las materias disponibles. <br />
            El sistema permite <strong>visualizar el estado de la matrícula</strong> (aceptada, rechazada o en revisión) y acceder a la <strong>pantalla principal con las tareas asignadas</strong>, facilitando el seguimiento de sus actividades académicas.
            </span>
        </div>

        <CarrucelKaren images={alumnoImages} title="" />

        </div>


      
    </div>
  )
}