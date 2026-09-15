import React from 'react'
import { Plyr } from 'plyr-react'
import 'plyr-react/plyr.css'
import '../utils/cubia.css'

import video from '../assets/clubia/clubia.mp4'

import php from '../assets/lenguajes/php.png'
import css from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import laravel from '../assets/lenguajes/laravel.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import terminal from '../assets/lenguajes/terminal-ubuntu.png'
import apache from '../assets/lenguajes/apache.png'
import nginx from '../assets/lenguajes/nginx.png'

import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel'
import ScrollIndicator from '../components/scroll'

import inicio from '../assets/clubia/inicio.PNG'
import loginEmpleado from '../assets/clubia/1loginEmpleado.PNG'
import inicioEmpleado from '../assets/clubia/1inicioEmpleado.PNG'
import roles from '../assets/clubia/1roles.PNG'
import parametros from '../assets/clubia/1parametros.PNG'
import alertas from '../assets/clubia/alertas.PNG'

import ventas from '../assets/clubia/1ventas.PNG'
import registroVentas from '../assets/clubia/1registroVentas.PNG'
import facturacion from '../assets/clubia/1facturacion.PNG'
import caja from '../assets/clubia/1caja.PNG'

import registroSocio from '../assets/clubia/1registroSocio.PNG'
import panelSocios from '../assets/clubia/1panelSocios.PNG'
import moderacion from '../assets/clubia/1moderacion.PNG'
import fotoCarnet from '../assets/clubia/2fotoCarnet.PNG'
import inicioSocio from '../assets/clubia/2inicioSocio.PNG'
import mail from '../assets/clubia/mail.PNG'

const socioImages = [
  inicio,
  loginEmpleado,
  inicioEmpleado,
  roles,
  parametros,
  alertas,
]

const facturacionImages = [
  ventas,
  registroVentas,
  facturacion,
  caja,
]

const gestionImages = [
  registroSocio,
  panelSocios,
  moderacion,
  fotoCarnet,
  inicioSocio,
  mail,
]

export default function Clubia() {
  return (
    <main className="clubia-page">

      <ScrollIndicator />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="clubia-hero" id="clubia-inicio">

        <div className="clubia-hero-content">

          <span className="clubia-eyebrow">
            PROYECTO DESTACADO · SISTEMA WEB
          </span>

          <h1 className="clubia-hero-title">
            Conoce más sobre <strong>Clubia</strong>
            <span className="clubia-cursor">_</span>
          </h1>

          <p className="clubia-hero-description">
            <strong>Clubia</strong> es un
            <strong> sistema web de gestión para clubes</strong>
            enfocado en la administración de
            <strong> socios, actividades y facturación</strong>.
            La plataforma centraliza la información de la institución,
            facilitando el seguimiento de los miembros, la organización
            de actividades y el control administrativo.
          </p>

          <div className="clubia-hero-tags">
            <span>Gestión de socios</span>
            <span>Facturación</span>
            <span>Administración</span>
            <span>Portal de socios</span>
          </div>

        </div>

        <div className="clubia-video-wrapper">

          <div className="clubia-video-header">
            <div>
              <span className="clubia-video-label">
                DEMOSTRACIÓN
              </span>

              <h2>
                Una vista general del sistema
              </h2>
            </div>

            <span className="clubia-video-status">
              <span />
              DEMO
            </span>
          </div>

          <div className="clubia-video">
            <Plyr
              source={{
                type: 'video',
                sources: [
                  {
                    src: video,
                    type: 'video/mp4',
                  },
                ],
              }}
              options={{
                controls: [
                  'play',
                  'rewind',
                  'fast-forward',
                  'progress',
                  'current-time',
                  'duration',
                  'volume',
                  'fullscreen',
                ],
              }}
            />
          </div>

        </div>

      </section>


      {/* =====================================================
          TECNOLOGÍAS
      ===================================================== */}

      <section className="clubia-tech-section">

        <div className="clubia-section-heading">
          <span>STACK TECNOLÓGICO</span>

          <h2>
            Herramientas <strong>utilizadas</strong>
            <span className="clubia-cursor">_</span>
          </h2>

          <p>
            Tecnologías utilizadas durante el análisis,
            desarrollo, implementación y despliegue de la plataforma.
          </p>
        </div>

        <div className="clubia-tech-grid">

          <article className="clubia-tech-card">

            <div className="clubia-tech-card-header">
              <span className="clubia-tech-number">01</span>

              <div>
                <span>DESARROLLO</span>
                <h3>Lenguajes y frameworks</h3>
              </div>
            </div>

            <div className="clubia-tech-list">

              <div className="clubia-tech-item">
                <img src={html} alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="clubia-tech-item">
                <img src={css} alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="clubia-tech-item">
                <img src={js} alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="clubia-tech-item">
                <img src={php} alt="PHP" />
                <span>PHP</span>
              </div>

              <div className="clubia-tech-item">
                <img src={laravel} alt="Laravel" />
                <span>Laravel</span>
              </div>

              <div className="clubia-tech-item">
                <img src={sql} alt="MySQL" />
                <span>MySQL</span>
              </div>

            </div>

          </article>


          <article className="clubia-tech-card">

            <div className="clubia-tech-card-header">
              <span className="clubia-tech-number">02</span>

              <div>
                <span>INFRAESTRUCTURA</span>
                <h3>Herramientas y servicios</h3>
              </div>
            </div>

            <div className="clubia-tech-list">

              <div className="clubia-tech-item">
                <img src={git} alt="Git" />
                <span>Git</span>
              </div>

              <div className="clubia-tech-item">
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </div>

              <div className="clubia-tech-item">
                <img src={npm} alt="NPM" />
                <span>NPM</span>
              </div>

              <div className="clubia-tech-item">
                <img src={terminal} alt="Ubuntu" />
                <span>Ubuntu</span>
              </div>

              <div className="clubia-tech-item">
                <img src={apache} alt="Apache" />
                <span>Apache</span>
              </div>

              <div className="clubia-tech-item">
                <img src={nginx} alt="Nginx" />
                <span>Nginx</span>
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          FUNCIONALIDADES
      ===================================================== */}

      <section className="clubia-features" id="clubia-funcionalidades">

        <div className="clubia-section-heading clubia-features-heading">

          <span>FUNCIONALIDADES</span>

          <h2>
            Descubre lo que hace <strong>Clubia</strong>
            <span className="clubia-cursor">_</span>
          </h2>

          <p>
            Una plataforma pensada para centralizar y simplificar
            la gestión cotidiana de una institución deportiva.
          </p>

        </div>


        {/* -----------------------------------------------------
            FUNCIONALIDAD 01
        ----------------------------------------------------- */}

        <article className="clubia-feature-block">

          <div className="clubia-feature-content">

            <div className="clubia-feature-number">
              01
            </div>

            <div className="clubia-feature-text">

              <span className="clubia-feature-label">
                SOCIOS · ACTIVIDADES
              </span>

              <h3>
                Gestión integral de socios y actividades
              </h3>

              <p>
                Administración completa del
                <strong> padrón de socios</strong>, incluyendo
                <strong> alta, baja y modificación</strong>,
                <strong> tipos de socio</strong>,
                <strong> grupos familiares</strong> y
                <strong> estados activo/inactivo</strong>.
              </p>

              <p>
                El sistema permite gestionar la
                <strong> inscripción a actividades y subactividades</strong>,
                visualizar socios inscriptos mediante paneles de control,
                aplicar reglas automáticas de inactividad por falta de pago
                y realizar la <strong>moderación de fotografías</strong>
                destinadas al carnet digital.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={gestionImages}
            title="Gestión de socios"
          />

        </article>


        {/* -----------------------------------------------------
            FUNCIONALIDAD 02
        ----------------------------------------------------- */}

        <article className="clubia-feature-block">

          <div className="clubia-feature-content">

            <div className="clubia-feature-number">
              02
            </div>

            <div className="clubia-feature-text">

              <span className="clubia-feature-label">
                FACTURACIÓN · VENTAS · FINANZAS
              </span>

              <h3>
                Facturación, ventas y control financiero
              </h3>

              <p>
                Sistema de <strong>facturación mensual automática</strong>,
                tanto <strong>masiva como individual</strong>, junto con
                herramientas para gestionar ventas presenciales,
                registro de pagos, notas de crédito y estados de cuenta.
              </p>

              <p>
                También incorpora <strong>movimientos de caja diarios</strong>,
                gestión de productos y categorías, facturación a proveedores,
                órdenes de compra con generación de PDF y control detallado
                de <strong>ingresos y egresos</strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={facturacionImages}
            title="Facturación y ventas"
          />

        </article>


        {/* -----------------------------------------------------
            FUNCIONALIDAD 03
        ----------------------------------------------------- */}

        <article className="clubia-feature-block">

          <div className="clubia-feature-content">

            <div className="clubia-feature-number">
              03
            </div>

            <div className="clubia-feature-text">

              <span className="clubia-feature-label">
                ADMINISTRACIÓN · PORTAL DE SOCIOS
              </span>

              <h3>
                Plataforma administrativa y experiencia del socio
              </h3>

              <p>
                Panel administrativo con
                <strong> roles y permisos configurables</strong>,
                personalización visual del sistema, estadísticas generales
                y gestión de empleados e instituciones.
              </p>

              <p>
                Desde el lado del socio, Clubia ofrece un
                <strong> portal personal</strong> para consultar datos,
                actividades, facturas y carnet digital, además de permitir
                el cambio de contraseña inicial y el envío automático
                de emails con <strong>links de pago mediante Mercado Pago</strong>.
              </p>

              <p>
                El sistema también permite mantener actualizado en tiempo real
                el <strong>estado de las facturas</strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={socioImages}
            title="Portal y administración"
          />

        </article>

      </section>

    </main>
  )
}