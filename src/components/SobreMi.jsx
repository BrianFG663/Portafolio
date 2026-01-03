import React, { useState, useEffect } from 'react'
import '../utils/sobreMi.css'
import { WrenchScrewdriverIcon, CpuChipIcon, ServerStackIcon,ChartBarIcon } from '@heroicons/react/24/outline'
import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import laravel from '../assets/lenguajes/laravel.png'
import react from '../assets/lenguajes/react.png'
import sql from '../assets/lenguajes/servidor-sql.png'
import tail from '../assets/lenguajes/tail.png'
import TypeScript from '../assets/lenguajes/type.png'

export default function sobreMi(){
    return(
        <div className='sobreMi'>
            <div className='conte'>
                <div className='presentacion'>
                <p>Soy <strong>Técnico Superior en Análisis y Desarrollo de Software</strong>, con una <strong>visión integral del desarrollo de aplicaciones</strong> y curiosidad por entender <strong>cómo funcionan los sistemas por dentro.</strong></p>
                <p>Me considero una persona <strong>proactiva</strong>, <strong>responsable</strong> y con <strong>muchas ganas de aprender.</strong> Me gusta <strong>analizar problemas</strong>, <strong>buscar soluciones claras</strong> y <strong>trabajar en equipo</strong>, compartiendo ideas y mejorando continuamente tanto el código como los procesos.</p> 
                <p>Actualmente estoy buscando una <strong>oportunidad profesional</strong> donde pueda <strong>seguir creciendo</strong>, <strong>aportar desde el primer día</strong> y <strong>formar parte de un equipo de desarrollo</strong>, ya sea en modalidad remota o presencial. </p>
            </div>
            <div className='certificaciones'>
                <div>
                    <span className='numero'>1</span>
                    <span className='texto'>Tecnicatura superior</span>
                </div>
                <div>
                    <span className='numero'>+5</span>
                    <span className='texto'>certificaciones</span>
                </div>
                <div>
                    <span className='numero'>+8</span>
                    <span className='texto'>Lenguajes + Frameworks</span>
                </div>
            </div>
            </div>
            
            <div className='experiencia'>
 
                <div className='contenedorCarta'>
                    <div className='carta'>
                        <ServerStackIcon></ServerStackIcon><span><strong>Desarrollo Fullstack</strong> <br />Integro frontend y backend en aplicaciones completas, implementando autenticación, roles, validaciones y migraciones. Mi perfil fullstack me permite aportar en todas las etapas del desarrollo. </span>
                    </div>
                    <div className='carta'>
                        <ChartBarIcon></ChartBarIcon><span><strong>Análisis de datos</strong> <br />Tengo experiencia en el diseño y consulta de bases de datos generando reportes y auditorías, Además, utilizo Power BI para el análisis y la visualización de datos facilitando la interpretación de métricas.</span>
                    </div>
                </div>
                
                <div className=''>
                    
                </div>
            </div>
        </div>
    )
}