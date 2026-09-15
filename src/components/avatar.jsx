import React, { useEffect, useRef } from 'react'
import '../utils/avatar.css'
import avatar from '../assets/avatar.png'

export default function AvatarInteractivo() {
  const avatarRef = useRef(null)

  const ojoIzq = useRef(null)
  const pupilaIzq = useRef(null)

  const ojoDer = useRef(null)
  const pupilaDer = useRef(null)

  const cejaIzq = useRef(null)
  const cejaDer = useRef(null)

  const parpadeoIzq = useRef(null)
  const parpadeoDer = useRef(null)

  // ============================================================
  // MOVIMIENTO DEL AVATAR
  // ============================================================

  useEffect(() => {
    const moverAvatar = (e) => {
      if (!avatarRef.current) return

      const rect = avatarRef.current.getBoundingClientRect()

      const centroX = rect.left + rect.width / 2
      const centroY = rect.top + rect.height / 2

      const dx = e.clientX - centroX
      const dy = e.clientY - centroY

      const maxMovimiento = 5

      const movimientoX = Math.max(
        -maxMovimiento,
        Math.min(maxMovimiento, dx / 100)
      )

      const movimientoY = Math.max(
        -maxMovimiento,
        Math.min(maxMovimiento, dy / 100)
      )

      avatarRef.current.style.setProperty(
        '--avatar-move-x',
        `${movimientoX}px`
      )

      avatarRef.current.style.setProperty(
        '--avatar-move-y',
        `${movimientoY}px`
      )
    }

    window.addEventListener('mousemove', moverAvatar)

    return () => {
      window.removeEventListener('mousemove', moverAvatar)
    }
  }, [])

  // ============================================================
  // SEGUIMIENTO DE LOS OJOS
  // ============================================================

  useEffect(() => {
    const moverOjos = (e) => {
      const { clientX, clientY } = e

      const mover = (ojo, pupila) => {
        if (!ojo || !pupila) return

        const rect = ojo.getBoundingClientRect()

        const centroX = rect.left + rect.width / 2
        const centroY = rect.top + rect.height / 2

        const dx = clientX - centroX
        const dy = clientY - centroY

        const distancia = Math.hypot(dx, dy)
        const angle = Math.atan2(dy, dx)

        // Movimiento muy sutil del ojo completo
        const distOjo = Math.min(
          5,
          distancia / 45
        )

        ojo.style.setProperty(
          '--ojo-x',
          `${Math.cos(angle) * distOjo}px`
        )

        ojo.style.setProperty(
          '--ojo-y',
          `${Math.sin(angle) * distOjo}px`
        )

        // Movimiento de la pupila
        const distPupila = Math.min(
          4.5,
          distancia / 18
        )

        pupila.setAttribute(
          'cx',
          17.5 + Math.cos(angle) * distPupila
        )

        pupila.setAttribute(
          'cy',
          17.5 + Math.sin(angle) * distPupila
        )
      }

      mover(
        ojoIzq.current,
        pupilaIzq.current
      )

      mover(
        ojoDer.current,
        pupilaDer.current
      )
    }

    window.addEventListener(
      'mousemove',
      moverOjos
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moverOjos
      )
    }
  }, [])

  // ============================================================
  // MOVIMIENTO DE CEJAS
  // ============================================================

  useEffect(() => {
    const moverCejas = (e) => {
      if (
        !cejaIzq.current ||
        !cejaDer.current
      ) {
        return
      }

      const { clientY } = e

      const rectIzq =
        cejaIzq.current.getBoundingClientRect()

      const rectDer =
        cejaDer.current.getBoundingClientRect()

      const zonaSuperior =
        clientY <
        Math.min(
          rectIzq.top,
          rectDer.top
        )

      if (zonaSuperior) {
        cejaIzq.current.style.transform =
          'translateY(-4px) rotate(-6deg)'

        cejaDer.current.style.transform =
          'translateY(-4px) rotate(6deg)'
      } else {
        cejaIzq.current.style.transform =
          'translateY(0) rotate(0deg)'

        cejaDer.current.style.transform =
          'translateY(0) rotate(0deg)'
      }
    }

    window.addEventListener(
      'mousemove',
      moverCejas
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moverCejas
      )
    }
  }, [])

  // ============================================================
  // PARPADEO AUTOMÁTICO
  // ============================================================

  useEffect(() => {
    let timeoutParpadeo
    let timeoutAbrir

    const parpadear = () => {
      if (
        !parpadeoIzq.current ||
        !parpadeoDer.current
      ) {
        return
      }

      parpadeoIzq.current.classList.add(
        'avatar-parpadeo'
      )

      parpadeoDer.current.classList.add(
        'avatar-parpadeo'
      )

      timeoutAbrir = setTimeout(() => {
        if (parpadeoIzq.current) {
          parpadeoIzq.current.classList.remove(
            'avatar-parpadeo'
          )
        }

        if (parpadeoDer.current) {
          parpadeoDer.current.classList.remove(
            'avatar-parpadeo'
          )
        }
      }, 260)

      // Próximo parpadeo entre 4 y 7 segundos
      timeoutParpadeo = setTimeout(
        parpadear,
        4000 + Math.random() * 3000
      )
    }

    timeoutParpadeo = setTimeout(
      parpadear,
      3500 + Math.random() * 2500
    )

    return () => {
      clearTimeout(timeoutParpadeo)
      clearTimeout(timeoutAbrir)
    }
  }, [])

  return (
    <div
      className="avatar-container"
      ref={avatarRef}
    >
      <div className="avatar-halo" />

      <div className="avatar-glow" />

      <img
        src={avatar}
        alt="Avatar estilizado de Brian Gonzalez"
        className="avatar-base"
      />

      {/* CEJAS */}

      <div className="cejas">
        <div
          className="ceja ceja-izq"
          ref={cejaIzq}
        />

        <div
          className="ceja ceja-der"
          ref={cejaDer}
        />
      </div>

      {/* OJOS */}

      <div className="ojos">

        <div
          className="ojo-wrapper"
          ref={parpadeoIzq}
        >
          <svg
            className="ojo"
            ref={ojoIzq}
            viewBox="0 0 35 35"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <circle
              cx="17.5"
              cy="17.5"
              r="17.5"
              fill="#a0eaff"
            />

            <circle
              cx="17.5"
              cy="17.5"
              r="10"
              fill="#004080"
            />

            <circle
              cx="17.5"
              cy="17.5"
              r="4"
              fill="#dae9ee"
              ref={pupilaIzq}
            />
          </svg>
        </div>

        <div
          className="ojo-wrapper"
          ref={parpadeoDer}
        >
          <svg
            className="ojo"
            ref={ojoDer}
            viewBox="0 0 35 35"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <circle
              cx="17.5"
              cy="17.5"
              r="17.5"
              fill="#a0eaff"
            />

            <circle
              cx="17.5"
              cy="17.5"
              r="10"
              fill="#004080"
            />

            <circle
              cx="17.5"
              cy="17.5"
              r="4"
              fill="#dae9ee"
              ref={pupilaDer}
            />
          </svg>
        </div>

      </div>

      {/* DECORACIÓN */}

      <div className="avatar-decoracion avatar-decoracion-1" />
      <div className="avatar-decoracion avatar-decoracion-2" />
      <div className="avatar-decoracion avatar-decoracion-3" />
      <div className="avatar-decoracion avatar-decoracion-4" />

    </div>
  )
}