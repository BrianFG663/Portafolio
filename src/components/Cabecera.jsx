import React from 'react'
import '../utils/cabecera.css'
import { HomeIcon, FolderIcon, EnvelopeIcon,UserIcon } from '@heroicons/react/24/solid'


export default function Cabecera(){
  return (
    <header>
      <a href="#Inicio" className="linkCabecera"><button className='botonesCabecera'><HomeIcon/><span className="textoBoton">Inicio</span></button></a>
      <a href="#AcercaDeMi" className="linkCabecera"><button className='botonesCabecera'><UserIcon/><span className="textoBoton">Acerca de mi</span></button></a>
      <a href="#Proyectos" className="linkCabecera"><button className='botonesCabecera'><FolderIcon/><span className="textoBoton">Mis Proyectos</span></button></a>
      <a href="#Contactame" className="linkCabecera"><button className='botonesCabecera'><EnvelopeIcon/><span className="textoBoton">Contactame</span></button></a>      
    </header>
  )
}
