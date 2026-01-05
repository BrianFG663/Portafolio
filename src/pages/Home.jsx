import React, { useState, useEffect } from 'react'
import '../utils/Home.css'
import AvatarInteractivo from '../components/avatar'
import lineas from '../assets/lineas.png'
import Cabecera from '../components/Cabecera'
import Botones from '../components/Botones'
import Overlay from '../components/Overlay'
import SobreMi from '../components/SobreMi'



export default function Home(){

  const texto = "Desarrollador Full-Stack Junior </>."
  const [subTitulo, setSubTitulo] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < texto.length) {
        setSubTitulo(texto.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [texto])

  return(
    
    <main>
      <Cabecera></Cabecera>
      <div className='contenedor' id='Inicio'>
        <img src={lineas} className='lineas' />
        <div className='contenedorInformacion'>
          <h1 className='tituloNombre'>Hola, mi nombre es <strong>Brian Nazareno Gonzalez</strong><span className="cursor">|</span></h1>
          <h2 className='subTitulo'>{subTitulo}</h2>
          <h2 className='introduccion'><strong>Especializado en la construcción de aplicaciones web robustas y escalables</strong> con <strong>PHP/Laravel</strong>, <strong>React</strong> y <strong>MySQL</strong>. Apasionado por la resolución de problemas, la arquitectura de sistemas y las <strong>buenas prácticas de desarrollo</strong>.</h2>
          <div className='botonesPersonales'>
            <a href="#AcercaDeMi" className='botonConoceme'>Acerca de mi</a>
            <a href="#Proyectos" className='botonProyectos'>Mis proyectos</a>
          </div>
          <Botones></Botones>
        </div>
        <div className='contenedorFoto'>
          <AvatarInteractivo></AvatarInteractivo>
        </div>
      </div>


      <div className='contenedorSobreMi'>
        <SobreMi></SobreMi>
      </div>     
      
    </main>
    
    )
}