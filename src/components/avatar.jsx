import React, { useEffect, useRef } from 'react'
import '../utils/avatar.css'
import avatar from '../assets/avatar.png'

export default function AvatarInteractivo() {
  const ojoIzq = useRef(null)
  const pupilaIzq = useRef(null)
  const ojoDer = useRef(null)
  const pupilaDer = useRef(null)

  useEffect(() => {
    const moverOjos = (e) => {
      const { clientX, clientY } = e

      const mover = (ojo, pupila) => {
        const rect = ojo.getBoundingClientRect()
        const dx = clientX - (rect.left + rect.width / 2)
        const dy = clientY - (rect.top + rect.height / 2)
        const angle = Math.atan2(dy, dx)

        // ojo completo se mueve poco
        const distOjo = Math.min(8, Math.hypot(dx, dy) / 32)

        ojo.style.transform = `translate(${Math.cos(angle) * distOjo}px, ${Math.sin(angle) * distOjo}px)`

        // pupila se mueve más dentro del ojo
        const distPupila = Math.min(5, Math.hypot(dx, dy) / 15)
        pupila.setAttribute('cx', 17.5 + Math.cos(angle) * distPupila)
        pupila.setAttribute('cy', 17.5 + Math.sin(angle) * distPupila)
      }

      mover(ojoIzq.current, pupilaIzq.current)
      mover(ojoDer.current, pupilaDer.current)
    }

    window.addEventListener('mousemove', moverOjos)
    return () => window.removeEventListener('mousemove', moverOjos)
  }, [])

  const cejaIzq = useRef(null)
  const cejaDer = useRef(null)

  useEffect(() => {
    const moverCejas = (e) => {
      const { clientY } = e
      const rectIzq = cejaIzq.current.getBoundingClientRect()
      const rectDer = cejaDer.current.getBoundingClientRect()

      if (clientY < rectIzq.top) {
        cejaIzq.current.style.transform = "translateY(-6px) rotate(-10deg) scaleX(1.1)"
        cejaDer.current.style.transform = "translateY(-6px) rotate(10deg) scaleX(1.1)"
        cejaIzq.current.style.borderRadius = "30%/100%"
        cejaDer.current.style.borderRadius = "30%/100%"
      } else {
        cejaIzq.current.style.transform = "translateY(0) rotate(0deg) scaleX(1)"
        cejaDer.current.style.transform = "translateY(0) rotate(0deg) scaleX(1)"
      }
    }

    window.addEventListener("mousemove", moverCejas)
    return () => window.removeEventListener("mousemove", moverCejas)
  }, [])

  return (
    <div className="avatar-container">
      <img src={avatar} alt="Avatar estilizado" className="avatar-base" />

      <div className="cejas">
        <div className="ceja ceja-izq" ref={cejaIzq}></div>
        <div className="ceja ceja-der" ref={cejaDer}></div>
      </div>

      
      <div className="ojos">
        {/* Ojo izquierdo más chico */}
        <svg className="ojo" ref={ojoIzq} viewBox="0 0 35 35" preserveAspectRatio="xMidYMid meet">
          <circle cx="17.5" cy="17.5" r="17.5" fill="#a0eaff" />   {/* fondo */}
          <circle cx="17.5" cy="17.5" r="10" fill="#004080" />     {/* iris */}
          <circle cx="17.5" cy="17.5" r="4" fill="#dae9eeff" ref={pupilaIzq} /> {/* pupila */}
        </svg>

        {/* Ojo derecho más chico */}
        <svg className="ojo" ref={ojoDer} viewBox="0 0 35 35" preserveAspectRatio="xMidYMid meet">
          <circle cx="17.5" cy="17.5" r="17.5" fill="#a0eaff" />
          <circle cx="17.5" cy="17.5" r="10" fill="#004080" />
          <circle cx="17.5" cy="17.5" r="4" fill="#dae9eeff" ref={pupilaDer} />
        </svg>
      </div>
    </div>
  )
}
