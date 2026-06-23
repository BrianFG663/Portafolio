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
import React from 'react'
import '../utils/experiencias.css'


export default function Experiencias() {
  return (
    <div className='contenedorExperiencias' id='experiencias'>
        <h1 className='tituloExperiencias'>Experiencias <strong>laborales</strong><span className="cursor">_</span></h1>
        <div className='experiencias'>
            <div>
                <span>Octubre 2024 - Diciembre 2025 </span>
                <span className='tecnologias'>Tecnologias utilizadas </span>
                <div>
                    <img src={php}  title='PHP'/>
                    <img src={laravel} title='Laravel' />
                    <img src={css} title='CSS' />
                    <img src={js} title='JavaScript' />
                    <img src={sql} title='MySql' />
                    <img src={github} title='GitHub' />
                    <img src={git} title='Git' />
                    <img src={nginx} title='Nginx' />
                    <img src={apache} title='Apache' />
                    <img src={terminal} title='Terminal Linux (Ubuntu)' />
                </div>
            </div>
            <p>
                <strong>SISTEMA DE GESTION DE SOCIOS (CLUBIA)</strong> <br />
                <span><strong>Club Central Entrerriano</strong></span> <br />
                <span>
                    Esta aplicación fue desarrollada por un <strong>equipo de tres personas</strong> como <strong>pasantía y tesis</strong> de mis estudios, con el objetivo de <strong>aplicar e integrar los conocimientos</strong> adquiridos durante la <strong>carrera</strong>. <br /> <br />
                    El proyecto abarcó las etapas de <strong>análisis</strong>, <strong>entrevistas</strong> y <strong>documentación</strong>, junto con el <strong>desarrollo del código</strong>, <strong>implementación</strong>, <strong>pruebas</strong> y <strong>despliegue en servidor</strong>, aplicando <strong>buenas prácticas</strong> y trabajando en un entorno <strong>igual o muy similar al profesional</strong>.
                </span> <br /> <br />
                
                <span>
                    • Elaboración de <strong>guías de usuario</strong>, <strong>documentación</strong>, <strong>manuales</strong> y <strong>capacitaciones</strong>. <br /> 
                    • Desarrollo de funcionalidades aplicando <strong>POO</strong> con <strong>PHP(Laravel)</strong> y <strong>JavaScript</strong>. <br /> 
                    • Modelado de <strong>datos</strong> y consultas <strong>SQL</strong>(MySQL). <br />
                    • Diseño de <strong>lógica de negocio</strong> y <strong>estructuración modular</strong> del sistema. <br />
                    • Pruebas <strong>unitarias</strong>, de <strong>integración</strong>, de <strong>sistema</strong>, <strong>caja negra</strong> y <strong>caja blanca</strong>. <br /> 
                    • Participación en <strong>reuniones de relevamiento</strong> y <strong>validación de requerimientos</strong>. <br />
                    • <strong>Desarrollo completo de la aplicación web</strong>, abarcando desde el <strong>entorno local</strong> hasta el <strong>deploy en servidor</strong>, incluyendo la configuración del <strong>entorno</strong> de <strong>producción</strong>, clonación del <strong>repositorio</strong>, <strong>mantenimiento</strong> y <strong>actualización</strong> continua de la <strong>aplicación</strong>.
                </span>
            </p>
        </div>
        <div className='experiencias'>
            <div>
                <span>Enero 2026 - Actualidad </span>
                <span className='tecnologias'>Tecnologias utilizadas </span>
                <div>
                    <img src={reactLogo} title='React' />
                    <img src={css} title='CSS' />
                    <img src={js} title='JavaScript' />
                    <img src={github} title='GitHub' />
                    <img src={zoho} title='Zoho-mail' />
                    <img src={git} title='Git' />
                    <img src={nginx} title='Nginx' />
                    <img src={terminal} title='Terminal Linux (Ubuntu)' />
                </div>
            </div>
            <p>
                <strong>SITIO WEB INSTITUCIONAL</strong> <br />
                <span><strong>Asociación de Profesionales de Servicio Social (APSS)</strong></span> <br />
                <span>
                    Desarrollo, implementación y mantenimiento del sitio web institucional de APSS, con el objetivo de modernizar la presencia digital de la organización y facilitar la difusión de noticias, actividades, documentos e información para sus afiliados.
                </span> <br /> <br />
                
                <span>
                   • Desarrollo de la interfaz utilizando <strong>React (JSX)</strong>, <strong>JavaScript</strong> y <strong>CSS</strong>. <br/>
                    • Diseño e implementación de una experiencia <strong>responsive</strong> para dispositivos móviles y escritorio. <br/>
                    • Configuración, despliegue y administración del entorno de producción en <strong>Linux Ubuntu</strong>. <br/>
                    • Implementación y gestión de servicios mediante <strong>Node.js</strong>. <br/>
                    • Migración del sitio web manteniendo el <strong>dominio existente</strong> hacia una nueva infraestructura de <strong>hosting</strong>. <br/>
                    • Configuración y administración de correo corporativo mediante <strong>Zoho Mail</strong>. <br/>
                    • Resolución de incidencias relacionadas con <strong>hosting</strong>, <strong>SSL</strong>, <strong>dominio</strong> y servicios web. <br/>
                    • Mantenimiento, actualización e implementación de <strong>nuevas funcionalidades</strong> en la plataforma.
                </span>
            </p>
        </div>
    </div>
  )
}
