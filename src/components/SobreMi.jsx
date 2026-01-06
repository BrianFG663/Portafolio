import React, { useState, useEffect } from 'react'
import '../utils/sobreMi.css'
import { WrenchScrewdriverIcon, CpuChipIcon, ServerStackIcon,ChartBarIcon,ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import nodejs from '../assets/lenguajes/node.png'
import laravel from '../assets/lenguajes/laravel.png'
import react from '../assets/lenguajes/react.png'
import sql from '../assets/lenguajes/mysql.png'
import mongo from '../assets/lenguajes/mongo.png'
import tail from '../assets/lenguajes/tail.png'
import TypeScript from '../assets/lenguajes/type.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import terminal from '../assets/lenguajes/terminal.png'
import apache from '../assets/lenguajes/apache.png'
import nginx from '../assets/lenguajes/nginx.png'

export default function sobreMi(){
    return(
        <div className='sobreMi'>
            <span className='spanScroll' id='AcercaDeMi'></span>
            <h1 className="tituloSobreMi" >Descubre mas <strong>sobre mi</strong><span className="cursor">_</span></h1>
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
                
                <div className='contenedorLenguajes'>
                    <div className='cartaLenguajes'>
                        <h2>Back-end</h2>
                        <div>
                            <img src={php}  title='PHP'/>
                            <img src={laravel} title='Laravel' />
                            <img src={nodejs} title='Node.js' />
                            <img src={sql} title='MySql' />
                            <img src={mongo} title='MongoDB' />
                        </div>
                    </div>
                    <div className='cartaLenguajes'>
                        <h2>Front-end</h2>
                        <div>
                            <img src={html} title='HTML' />
                            <img src={css} title='CSS' />
                            <img src={tail} title='TailWind' />
                            <img src={js} title='JavaScript' />
                            <img src={TypeScript} title='TypeScript' />
                            <img src={react}  title='React'/>
                        </div>
                    </div>
                    <div className='cartaLenguajes'>
                        <h2>Herramientas</h2>
                        <div>
                            <img src={git} title='Git' />
                            <img src={github} title='GitHub' />
                            <img src={npm} title='NPM' />
                            <img src={terminal} title='Terminal' />
                            <img src={apache} title='Apache' />
                            <img src={nginx} title='Nginx' />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='contenedorDescargas'>
                <h2>¿Deseas conocer <strong>mas sobre mi</strong>?</h2>
                <div className='botonesDescargas'>
                    <a href="/CV-BrianNazarenoGonzalez.pdf" download="CV-BrianNazarenoGonzalez.pdf" className="btn-cv"><ArrowDownTrayIcon></ArrowDownTrayIcon>CV</a>
                    <a href="/CartaDePresentacion-GonzalezBrianNazareno.pdf" download="CartaDePresentacion-GonzalezBrianNazareno.pdf" className="btn-cv"><ArrowDownTrayIcon></ArrowDownTrayIcon>carta de presentacion</a>
                </div>
            </div>
            

            
        </div>
    )
}