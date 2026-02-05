import React from 'react'
import '../utils/proyectos.css'
import asistencia from '../assets/logos/asistencia.png'
import maquina from '../assets/logos/maquina.png'
import mabra from '../assets/logos/mabra.png'
import clubia from '../assets/logos/clubia.png'
import php from '../assets/lenguajes/php.png'
import laravel from '../assets/lenguajes/laravel.png'
import nginx from '../assets/lenguajes/nginx.png'
import tail from '../assets/lenguajes/tail.png'
import apache from '../assets/lenguajes/apache.png'
import terminal from '../assets/lenguajes/terminal-ubuntu.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import sql from '../assets/lenguajes/mysql.png'
import laragon from '../assets/lenguajes/laragon.png'
import { Link } from 'react-router-dom'

import { ArrowTopRightOnSquareIcon  } from '@heroicons/react/24/outline';
import { FaGithub } from "react-icons/fa";



export default function Proyectos(){
  return (
    <div className='contenedorProyecto'>
      <h2 className='tituloProyectos'>Mis proyectos destacados<span className="cursor">_</span></h2>
      <div className='proyectos'>

<div className='proyecto'>
          <div className='contenedorImagenClubia'>
            <img src={clubia}/>
            <div className='overlayClubia'>
              <div className='botonesProyecto'>
                <Link to="/Clubia"><ArrowTopRightOnSquareIcon ></ArrowTopRightOnSquareIcon ></Link>
              </div>
            </div>
          </div>
          
          <div className='conenedorInformacion'>
            <h2 className='tituloAplicacion'>Clubia</h2>
            <p>
              <strong>Sistema web de gestión de socios</strong> orientado a la <strong>administración integral</strong> de las <strong>actividades del club</strong>, con foco en el <strong>control de socios</strong>, la <strong>gestión de actividades</strong> y la <strong>facturación</strong>, optimizando los <strong>procesos administrativos</strong> y la <strong>organización institucional</strong>.
            </p>
            <div className='lenguajes'>
              <img src={html} title='HTML'/>
              <img src={css} title='CSS'/>
              <img src={laravel} title='Laravel'/>
              <img src={php} title='PHP'/>
              <img src={js} title='JavaScript'/>
              <img src={sql} title='MySql'/>
              <img src={nginx} title='Nginx'/>
              <img src={apache} title='Apache'/>
              <img src={terminal} title='Terminal linux(Ubuntu)'/>
            </div>
          </div>
        </div>

        <div className='proyecto'>
          <div className='contenedorImagenMaquinaria'>
            <img src={maquina}/>
            <div className='overlayMaquinaria'>
              <div className='botonesProyecto'>
                <a href='https://github.com/BrianFG663/ObraAlquiler' target='_blank'><FaGithub ></FaGithub></a>
                <a href='www.google.com'><ArrowTopRightOnSquareIcon ></ArrowTopRightOnSquareIcon ></a>  
              </div>
            </div>
          </div>
          
          <div className='conenedorInformacion'>
            <h2 className='tituloAplicacion'>ObrAlquiler</h2>
            <p>
              <strong>Aplicación web</strong>, diseñada para <strong>gestionar proyectos de construcción</strong> y el <strong>alquiler de maquinaria</strong>. Esta herramienta facilita el <strong>control y seguimiento de obras</strong>, <strong>equipos</strong> y <strong>recursos</strong>, optimizando la <strong>administración</strong> en <strong>empresas del sector de la construcción</strong>.
            </p>
            <div className='lenguajes'>
              <img src={html} title='HTML'/>
              <img src={tail} title='TailWind'/>
              <img src={laravel} title='Laravel'/>
              <img src={php} title='PHP'/>
              <img src={js} title='JavaScript'/>
              <img src={sql} title='MySql'/>
              <img src={laragon} title='Laragon'/>
            </div>
          </div>
        </div>

        <div className='proyecto'>
          <div className='contenedorImagenMabra'>
            <img src={mabra}/>
            <div className='overlayMabra'>
              <div className='botonesProyecto'>
                <a href='https://github.com/BrianFG663/Mabra-descartables-app' target='_blank'><FaGithub ></FaGithub></a>
                <a href='www.google.com'><ArrowTopRightOnSquareIcon ></ArrowTopRightOnSquareIcon ></a>  
              </div>
            </div>
          </div>
          
          <div className='conenedorInformacion'>
            <h2 className='tituloAplicacion'>MabraOps</h2>
            <p>
              <strong>Sistema web de gestión de negocio</strong> orientado a la <strong>administración integral</strong> de <strong>operaciones comerciales</strong>, con foco en <strong>control</strong>, <strong>trazabilidad</strong> y <strong>automatización de procesos</strong>.

            </p>
            <div className='lenguajes'>
              <img src={html} title='HTML'/>
              <img src={css} title='CSS'/>
              <img src={laravel} title='Laravel'/>
              <img src={php} title='PHP'/>
              <img src={js} title='JavaScript'/>
              <img src={sql} title='MySql'/>
              <img src={apache} title='Apache'/>
            </div>
          </div>
        </div>


        <div className='proyecto'>
          <div className='contenedorImagen'>
            <img src={asistencia}/>
            <div className='overlay'>
            <div className='botonesProyecto'>
              <a href='https://github.com/BrianFG663/Sistema-de-asistencias' target='_blank'><FaGithub ></FaGithub></a>
              <a href='www.google.com'><ArrowTopRightOnSquareIcon ></ArrowTopRightOnSquareIcon ></a>  
            </div>
            
          </div>
          </div>
          
          <div className='conenedorInformacion'>
            <h2 className='tituloAplicacion'>Asist-o-Matic</h2>
            <p>
              <strong>Sistema web de gestión de asistencias</strong> para <strong>instituciones educativas</strong> que permite a <strong>administradores</strong> y <strong>docentes</strong> controlar <strong>clases</strong>, <strong>asistencias</strong> y <strong>calificaciones</strong> de forma <strong>simple</strong> y <strong>eficiente</strong>.
            </p>
            <div className='lenguajes'>
              <img src={html} title='HTML'/>
              <img src={css} title='CSS'/>
              <img src={php} title='PHP'/>
              <img src={js} title='JavaScript'/>
              <img src={sql} title='MySql'/>
              <img src={laragon} title='Laragon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
