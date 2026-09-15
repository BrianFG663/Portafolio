
import React, { useEffect, useState } from 'react'
import '../utils/cabecera.css'

import {
  HomeIcon,
  FolderIcon,
  EnvelopeIcon,
  UserIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

export default function Cabecera() {
  const [seccionActiva, setSeccionActiva] = useState('Inicio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const secciones = [
      'Inicio',
      'AcercaDeMi',
      'experiencias',
      'Proyectos',
    ]

    const observarSecciones = () => {
      const scrollPosition = window.scrollY + 180

      setScrolled(window.scrollY > 20)

      let seccionEncontrada = 'Inicio'

      secciones.forEach((id) => {
        const elemento = document.getElementById(id)

        if (!elemento) return

        if (scrollPosition >= elemento.offsetTop) {
          seccionEncontrada = id
        }
      })

      setSeccionActiva(seccionEncontrada)
    }

    observarSecciones()

    window.addEventListener('scroll', observarSecciones, {
      passive: true,
    })

    return () => {
      window.removeEventListener(
        'scroll',
        observarSecciones
      )
    }
  }, [])

  const navegar = (id) => {
    const elemento = document.getElementById(id)

    if (!elemento) return

    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const enlaces = [
    {
      id: 'Inicio',
      label: 'Inicio',
      icon: HomeIcon,
    },
    {
      id: 'AcercaDeMi',
      label: 'Acerca de mí',
      icon: UserIcon,
    },
    {
      id: 'experiencias',
      label: 'Experiencias',
      icon: BriefcaseIcon,
    },
    {
      id: 'Proyectos',
      label: 'Proyectos',
      icon: FolderIcon,
    },
  ]

  return (
    <header
      className={`cabecera ${scrolled ? 'cabeceraScrolled' : ''}`}
    >
      <div className="cabeceraInterior">

        {/* =====================================================
            NAVEGACIÓN
        ====================================================== */}

        <nav
          className="navegacionCabecera"
          aria-label="Navegación principal"
        >
          {enlaces.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`linkCabecera ${
                seccionActiva === id ? 'linkActivo' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                navegar(id)
              }}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </nav>


        {/* =====================================================
            CONTACTO
        ====================================================== */}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=briangonzaz305@gmail.com&su=Contacto%20profesional%20%E2%80%93%20Oportunidad%20de%20empleo&body=Hola%20Brian,%0A%0AMi%20nombre%20es%20______%20y%20te%20escribo%20porque%20nos%20interes%C3%B3%20tu%20perfil%20profesional.%0ANos%20gustar%C3%ADa%20ponernos%20en%20contacto%20para%20conversar%20sobre%20una%20posible%20oportunidad%20de%20empleo.%0A%0AQuedamos%20atentos%20a%20tu%20respuesta.%0ASaludos."
          className="botonContacto"
          aria-label="Contactarme por correo electrónico"
        >
          <EnvelopeIcon />
          <span>Contactame</span>
        </a>

      </div>
    </header>
  )
}

