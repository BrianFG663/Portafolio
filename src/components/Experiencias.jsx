import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import js from '../assets/lenguajes/js.png'
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
    </div>
  )
}
