import React from 'react'
import '../utils/cabecera.css'
import { HomeIcon, FolderIcon, EnvelopeIcon,UserIcon, BriefcaseIcon  } from '@heroicons/react/24/solid'


export default function Cabecera(){
  return (
    <header>
      <a href="#Inicio" className="linkCabecera"><button className='botonesCabecera'><HomeIcon/><span className="textoBoton">Inicio</span></button></a>
      <a href="#AcercaDeMi" className="linkCabecera"><button className='botonesCabecera'><UserIcon/><span className="textoBoton">Acerca de mi</span></button></a>
      <a href="#experiencias" className="linkCabecera"><button className='botonesCabecera'><BriefcaseIcon/><span className="textoBoton">Experiencias</span></button></a>
      <a href="#Proyectos" className="linkCabecera"><button className='botonesCabecera'><FolderIcon/><span className="textoBoton">Mis Proyectos</span></button></a>
      <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=briangonzaz305@gmail.com&su=Contacto%20profesional%20%E2%80%93%20Oportunidad%20de%20empleo&body=Hola%20Brian,%0A%0AMi%20nombre%20es%20______%20y%20te%20escribo%20porque%20nos%20interes%C3%B3%20tu%20perfil%20profesional.%0ANos%20gustar%C3%ADa%20ponernos%20en%20contacto%20para%20conversar%20sobre%20una%20posible%20oportunidad%20de%20empleo.%0A%0AQuedamos%20atentos%20a%20tu%20respuesta.%0ASaludos." className="linkCabecera"><button className='botonesCabecera'><EnvelopeIcon/><span className="textoBoton">Contactame</span></button></a>      
    </header>
  )
}
