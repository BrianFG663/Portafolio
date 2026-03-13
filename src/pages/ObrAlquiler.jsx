import '../utils/paginaProyectos.css'
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel';
import HomeButton from '../components/HomeButton';

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

import login from '../assets/ObrAlquiler/Login.png'
import registro from '../assets/ObrAlquiler/Registro.jpg'
import edicion from '../assets/ObrAlquiler/Edicion.jpg'
import alertas from '../assets/ObrAlquiler/AlertasAmigables.jpg'
import historialObras from '../assets/ObrAlquiler/2HistorialDeObras.png'
import detalleObra from '../assets/ObrAlquiler/2DetalleDeObra.png'
import edicionObra from '../assets/ObrAlquiler/2edicionObra.png'
import registroObra from '../assets/ObrAlquiler/2registroObra.png'
import historialMaquinas from '../assets/ObrAlquiler/1HistorialDeMaquinas.png'
import detalleMaquinas from '../assets/ObrAlquiler/1DetalleDeMaquinaria.png'
import agregarMaquinas from '../assets/ObrAlquiler/1AgregarMaquinas.png'
import edicionMaquinas from '../assets/ObrAlquiler/1EdicionDeMaquinaria.png'
import historialMantenimiento from '../assets/ObrAlquiler/4HistorialDeMantenimientos.png'
import mantenimientoPendiente from '../assets/ObrAlquiler/4MantenimientosPendientes.png'
import detalleMantenimiento from '../assets/ObrAlquiler/4DetallesDeMantenimiento.png'
import asignacion  from '../assets/ObrAlquiler/3asignacionesDeMaquinariasObras.png'
import detalleAsignacion  from '../assets/ObrAlquiler/3DetalleAsignacion.png'
import reporte  from '../assets/ObrAlquiler/3ReporteMaquina.png'
import agregarAsignacion  from '../assets/ObrAlquiler/3AgregarAsignacion.png'
import laragon from '../assets/lenguajes/laragon.png'
import ScrollIndicator from '../components/scroll'


const asignacionImages = [
  asignacion,
  detalleAsignacion,
  reporte,
  agregarAsignacion
];

const loginImages = [
  login,
  registro,
  edicion,
  alertas
];

const maquinasMantenimiento = [
  historialMaquinas,
  agregarMaquinas,
  detalleMaquinas,
  edicionMaquinas,
  historialMantenimiento,
  mantenimientoPendiente,
  detalleMantenimiento
]

const obrasImages = [
  historialObras,
  detalleObra,
  registroObra,
  edicionObra
];



export default function ObrAlquiler() {


  return (
    <div className="contenedorObra">
      <ScrollIndicator />
      <HomeButton></HomeButton>

      <h2 id="seccionUno">
        Conoce mas sobre <strong>ObraAlquiler</strong><span className="cursor">_</span>
      </h2>

      <span>
        <strong>Aplicación web de gestión para empresas de construcción</strong> diseñada para administrar proyectos de obra y el alquiler de maquinaria, facilitando el control y seguimiento de obras, equipos y recursos, y optimizando la gestión operativa dentro del sector.
      </span>

      <AutoMarqueeCarousel images={loginImages} title="" />

      <h2 className='titulotres'>Herramientas <strong>utilizadas</strong><span className="cursor">_</span></h2>
      <div className='contenedorLenguajes'>
        <div className='cartaLenguajes'>
          <h2>Lenguajes y frameworks</h2>
          <div>
            <img src={html} title='HTML' alt="HTML" />
            <img src={tail} title='TailWind' alt="Tailwind" />
            <img src={js} title='JavaScript' alt="JavaScript" />
            <img src={php} title='PHP' alt="PHP" />
            <img src={laravel} title='Laravel' alt="Laravel" />
            <img src={sql} title='MySql' alt="MySQL" />
          </div>
        </div>

        <div className='cartaLenguajes'>
          <h2>Tecnologias</h2>
          <div>
            <img src={git} title='Git' alt="Git" />
            <img src={github} title='GitHub' alt="GitHub" />
            <img src={npm} title='NPM' alt="NPM" />
            <img src={laragon} title='Laragon' alt="Laragon" />
            <img src={node} title='NodeJS' alt="Node.js" />
          </div>
        </div>
      </div>


      <div className='funcionalidades' id='seccionDos'>
        <h2>Descubre lo que hace <strong>ObraAlquiler</strong><span className="cursor">_</span></h2>

        <div className='funcionalidadesSeccion'>
          <h3>Gestión y seguimiento de obras</h3>
          <span>
            Administración completa de <strong>proyectos de construcción</strong>, permitiendo la <strong>creación, edición y seguimiento de obras</strong> dentro del sistema. <br />
            Facilita la <strong>organización de proyectos</strong>, el <strong>registro de información relevante</strong> y el <strong>monitoreo del avance de las obras</strong>, centralizando la información para mejorar la <strong>planificación y control operativo</strong>.
          </span>
        </div>

        <AutoMarqueeCarousel images={obrasImages} title="" />

        <div className='funcionalidadesSeccion'>
          <h3>Administración de maquinaria y recursos</h3>
          <span>
            Sistema de <strong>registro y control de maquinaria</strong> disponible para alquiler, permitiendo gestionar <strong>equipos, disponibilidad y características</strong>. <br />
            Además, incorpora un <strong>registro de mantenimiento de maquinaria</strong>, permitiendo llevar un <strong>historial de revisiones, reparaciones y controles técnicos</strong> para asegurar el <strong>correcto funcionamiento</strong> y <strong>prolongar la vida útil de los equipos</strong>.
          </span>
        </div>

        <AutoMarqueeCarousel images={maquinasMantenimiento} title="" />

        <div className='funcionalidadesSeccion'>
          <h3>Control de alquileres y reportes</h3>
          <span>
            Gestión completa del <strong>alquiler de maquinaria</strong>, con <strong>seguimiento de períodos de alquiler</strong> y <strong>verificación de disponibilidad de equipos</strong>. <br />
            Permite además la <strong>asignación de maquinaria a obras específicas</strong>, facilitando el <strong>control del uso de equipos en cada proyecto</strong>. <br />
            Incluye la <strong>generación de reportes e informes</strong> sobre <strong>obras activas</strong>, <strong>utilización de maquinaria</strong> y <strong>movimiento de recursos</strong>, apoyando la <strong>toma de decisiones administrativas</strong>.
          </span>
        </div>

        <AutoMarqueeCarousel images={asignacionImages} title="" />
      </div>

      
    </div>
  )
}