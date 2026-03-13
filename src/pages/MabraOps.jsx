import '../utils/paginaProyectos.css'
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel';
import php from '../assets/lenguajes/php.png'
import tail from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import laravel from '../assets/lenguajes/laravel.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import node from '../assets/lenguajes/node.png'

import login from '../assets/mabra/Login.png'
import registro from '../assets/mabra/Registro.png'
import inicio from '../assets/mabra/inicio.png'
import alertas from '../assets/mabra/alertas.jpg'


import deudas  from '../assets/mabra/deudores.png'
import deudeaspc  from '../assets/mabra/deudapc.png'
import deudapp  from '../assets/mabra/deudapp.png'

import agregarArticulo  from '../assets/mabra/agregarArticulo.png'
import controlStock  from '../assets/mabra/controlStock.png'
import edicionUno  from '../assets/mabra/edicionUno.png'
import edicionDos  from '../assets/mabra/edicionDos.png'
import Ventas  from '../assets/mabra/Ventas.png'
import registroVentas  from '../assets/mabra/registroVentas.png'

import pedidos  from '../assets/mabra/pedidos.png'
import pedidodescarga  from '../assets/mabra/pedidodescarga.png'
import presupuestos  from '../assets/mabra/presupuestos.png'
import presupuestoconf  from '../assets/mabra/presupuestoconf.png'
import excel  from '../assets/mabra/Ventas.png'

import laragon from '../assets/lenguajes/laragon.png'
import ScrollIndicator from '../components/scroll'

const gestionComercialImages = [
  pedidos,
  pedidodescarga,
  excel,
  presupuestos,
  presupuestoconf,
]


const deudaImages = [
  deudas,
  deudeaspc,
  deudapp,
  registro
];

const gestionImages = [
  agregarArticulo,
  controlStock,
  edicionUno,
  edicionDos,
  Ventas,
  registroVentas
];




const loginImages = [
  login,
  registro,
  inicio,
  alertas
];



export default function MabraOps() {


  return (
    <div className="contenedorObra">
      <ScrollIndicator />

      <h2 id="seccionUno">
        Conoce mas sobre <strong>MabraOps</strong><span className="cursor">_</span>
      </h2>

      <span>
        <strong>Sistema web de gestión de negocio</strong> diseñado para la <strong>administración integral de operaciones comerciales</strong>, orientado a mejorar el <strong>control, la trazabilidad y la automatización de procesos</strong> dentro de <strong>pequeñas y medianas empresas</strong>, facilitando la <strong>centralización de tareas diarias</strong> y el <strong>seguimiento de la actividad comercial</strong>.
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
        <h2>Descubre lo que hace <strong>MabraOps</strong><span className="cursor">_</span></h2>

        <div className='funcionalidadesSeccion'>
          <h3>Gestión de usuarios y control de acceso</h3>
          <span>
            Sistema de <strong>administración de usuarios con roles y permisos</strong>, permitiendo definir distintos niveles de acceso dentro de la aplicación. <br />
            Incluye <strong>registro y auditoría de acciones realizadas por los usuarios</strong>, facilitando el <strong>control, la seguridad y la trazabilidad de la actividad</strong> dentro del sistema.
          </span>
        </div>

        <AutoMarqueeCarousel images={deudaImages} title="" />

        <div className='funcionalidadesSeccion'>
          <h3>Gestión de productos y control comercial</h3>
          <span>
            Administración completa de <strong>productos y catálogo comercial</strong>, con herramientas para el <strong>manejo de stock</strong>, <strong>registro de ventas</strong> y <strong>control de caja diaria</strong>. <br />
            Permite realizar <strong>actualizaciones masivas de precios</strong> y utilizar un <strong>sistema de búsqueda rápida de artículos</strong>, optimizando la gestión y el mantenimiento del inventario.
          </span>
        </div>

        <AutoMarqueeCarousel images={gestionImages} title="" />

        <div className='funcionalidadesSeccion'>
          <h3>Gestión de pedidos, presupuestos y análisis comercial</h3>
          <span>
            Permite la <strong>gestión de pedidos comerciales</strong> y el <strong>procesamiento de pedidos de gran volumen</strong>, mediante carga de archivos y herramientas de organización de datos. <br />
            Incluye la <strong>generación de presupuestos en formato PDF</strong> listos para compartir con clientes, así como la <strong>exportación de información a Excel</strong>. <br />
            Además, ofrece <strong>reportes de productos más vendidos</strong>, facilitando el <strong>análisis del rendimiento comercial</strong> y la <strong>toma de decisiones dentro del negocio</strong>.
          </span>
        </div>

        <AutoMarqueeCarousel images={gestionComercialImages} title="" />

      </div>
    </div>
  )
}