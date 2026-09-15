import React from 'react'
import '../utils/fitar.css'

import AutoMarqueeCarousel from '../components/CarrucelKaren'
import ScrollIndicator from '../components/scroll'

import reactNative from '../assets/lenguajes/react.png'
import expo from '../assets/lenguajes/expogo.png'
import tipe from '../assets/lenguajes/type.png'
import js from '../assets/lenguajes/js.png'
import npm from '../assets/lenguajes/npm.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'

// =====================================================
// CAPTURAS FITAR
// =====================================================

// Inicio
import inicioUno from '../assets/fitar/inicioUno.jpeg'

// Rutinas
import rutinaUno from '../assets/fitar/rutinaUno.jpeg'
import rutinaDos from '../assets/fitar/rutinaDos.jpeg'
import rutinaTres from '../assets/fitar/rutinaTres.jpeg'
import rutinaCuatro from '../assets/fitar/rutinaCuatro.jpeg'
import rutinaCinco from '../assets/fitar/rutinaCinco.jpeg'
import rutinaSeis from '../assets/fitar/rutinaSeis.jpeg'
import rutinaSiete from '../assets/fitar/rutinaSiete.jpeg'

// Calentamiento
import calentamientoUno from '../assets/fitar/calentamientoUno.jpeg'
import calentamientoDos from '../assets/fitar/calentamientoDos.jpeg'
import calentamioentoTres from '../assets/fitar/calentamioentoTres.jpeg'

// Movilidad
import movilidadUno from '../assets/fitar/movilidadUno.jpeg'
import movilidadDos from '../assets/fitar/movilidadDos.jpeg'
import movilidadTres from '../assets/fitar/movilidadTres.jpeg'

// Cronómetro
import cronometro from '../assets/fitar/cronometro.jpeg'

// Configuración
import configuracion from '../assets/fitar/configuracion.jpeg'

// Registros
import recordUno from '../assets/fitar/recordUno.jpeg'
import recordDos from '../assets/fitar/recordDos.jpeg'
import recordTres from '../assets/fitar/recordTres.jpeg'
import recordCuatro from '../assets/fitar/recordCuatro.jpeg'

// Progreso
import progresoUno from '../assets/fitar/progresoUno.jpeg'
import progresoDos from '../assets/fitar/progresoDos.jpeg'
import progresoTres from '../assets/fitar/progresoTres.jpeg'
import progresoCuatro from '../assets/fitar/progresoCuatro.jpeg'


// =====================================================
// CARRUSELES
// =====================================================

const fitarImages = [
  inicioUno,
  rutinaUno,
  rutinaDos,
  rutinaTres,
  rutinaCuatro,
  rutinaCinco,
  rutinaSeis,
  rutinaSiete,
  calentamientoUno,
  calentamientoDos,
  calentamioentoTres,
  movilidadUno,
  movilidadDos,
  movilidadTres,
  cronometro,
  recordUno,
  recordDos,
  recordTres,
  recordCuatro,
  progresoUno,
  progresoDos,
  progresoTres,
  progresoCuatro,
  configuracion,
]

const rutinasImages = [
  rutinaUno,
  rutinaDos,
  rutinaTres,
  rutinaCuatro,
  rutinaCinco,
  rutinaSeis,
  rutinaSiete,
]

const entrenamientoImages = [
  calentamientoUno,
  calentamientoDos,
  calentamioentoTres,
  movilidadUno,
  movilidadDos,
  movilidadTres,
  cronometro,
]

const registrosImages = [
  recordUno,
  recordDos,
  recordTres,
  recordCuatro,
]

const progresoImages = [
  progresoUno,
  progresoDos,
  progresoTres,
  progresoCuatro,
]

const configuracionImages = [
  configuracion,
]


export default function FitAR() {
  return (
    <main className="fitar-page">

      <ScrollIndicator />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="fitar-hero"
        id="fitar-inicio"
      >

        <div className="fitar-hero-content">

          <span className="fitar-eyebrow">
            PROYECTO DESTACADO · APLICACIÓN MOBILE
          </span>

          <h1 className="fitar-hero-title">
            Conoce más sobre <strong>FitAR</strong>
            <span className="fitar-cursor">_</span>
          </h1>

          <p className="fitar-hero-description">
            <strong>FitAR</strong> es una
            <strong> aplicación móvil de entrenamiento</strong>
            orientada a crear y gestionar
            <strong> rutinas de ejercicio</strong>.
            Permite organizar ejercicios y entrenamientos,
            registrar el progreso y consultar
            <strong> estadísticas de rendimiento</strong>
            desde una única aplicación.
          </p>

          <div className="fitar-hero-tags">
            <span>Rutinas</span>
            <span>Ejercicios</span>
            <span>Progreso</span>
            <span>Estadísticas</span>
          </div>

        </div>


        {/* =================================================
            VISTA GENERAL
        ================================================= */}

        <div className="fitar-showcase">

          <div className="fitar-showcase-header">

            <div>

              <span className="fitar-showcase-label">
                VISTA GENERAL
              </span>

              <h2>
                Una vista general de FitAR
              </h2>

            </div>

            <span className="fitar-showcase-status">
              <span />
              MOBILE
            </span>

          </div>

          <div className="fitar-showcase-carousel">

            <AutoMarqueeCarousel
              images={fitarImages}
              title=""
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TECNOLOGÍAS
      ===================================================== */}

      <section className="fitar-tech-section">

        <div className="fitar-section-heading">

          <span>
            STACK TECNOLÓGICO
          </span>

          <h2>
            Tecnologías <strong>utilizadas</strong>
            <span className="fitar-cursor">_</span>
          </h2>

          <p>
            Herramientas utilizadas para desarrollar la aplicación,
            gestionar su información local e integrar funcionalidades
            propias del entorno mobile.
          </p>

        </div>


        <div className="fitar-tech-grid">

          {/* =================================================
              01 · DESARROLLO
          ================================================= */}

          <article className="fitar-tech-card">

            <div className="fitar-tech-card-header">

              <span className="fitar-tech-number">
                01
              </span>

              <div>

                <span>
                  DESARROLLO
                </span>

                <h3>
                  Frameworks y lenguajes
                </h3>

              </div>

            </div>


            <div className="fitar-tech-list">

              <div className="fitar-tech-item">
                <img
                  src={reactNative}
                  alt="React Native"
                />
                <span>
                  React Native
                </span>
              </div>

              <div className="fitar-tech-item">
                <img
                  src={expo}
                  alt="Expo"
                />
                <span>
                  Expo
                </span>
              </div>

              <div className="fitar-tech-item">
                <img
                  src={tipe}
                  alt="TypeScript"
                />
                <span>
                  TypeScript
                </span>
              </div>

              <div className="fitar-tech-item">
                <img
                  src={js}
                  alt="JavaScript"
                />
                <span>
                  JavaScript
                </span>
              </div>

              <div className="fitar-tech-item">
                <img
                  src={npm}
                  alt="NPM"
                />
                <span>
                  NPM
                </span>
              </div>

            </div>

          </article>


          {/* =================================================
              02 · INTERFAZ
          ================================================= */}

          <article className="fitar-tech-card">

            <div className="fitar-tech-card-header">

              <span className="fitar-tech-number">
                02
              </span>

              <div>

                <span>
                  INTERFAZ · NAVEGACIÓN
                </span>

                <h3>
                  Componentes y navegación
                </h3>

              </div>

            </div>


            <div className="fitar-tech-list">

              <div className="fitar-tech-item">
                <span>
                  React Navigation
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  React Native Paper
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  React Native SVG
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  Android
                </span>
              </div>

            </div>

          </article>


          {/* =================================================
              03 · PERSISTENCIA
          ================================================= */}

          <article className="fitar-tech-card">

            <div className="fitar-tech-card-header">

              <span className="fitar-tech-number">
                03
              </span>

              <div>

                <span>
                  DATOS
                </span>

                <h3>
                  Persistencia local
                </h3>

              </div>

            </div>


            <div className="fitar-tech-list">

              <div className="fitar-tech-item">
                <span>
                  AsyncStorage
                </span>
              </div>

              <div className="fitar-tech-item">
                <img
                  src={tipe}
                  alt="TypeScript"
                />
                <span>
                  TypeScript
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  Context API
                </span>
              </div>

            </div>

          </article>


          {/* =================================================
              04 · FUNCIONES NATIVAS
          ================================================= */}

          <article className="fitar-tech-card">

            <div className="fitar-tech-card-header">

              <span className="fitar-tech-number">
                04
              </span>

              <div>

                <span>
                  FUNCIONES NATIVAS
                </span>

                <h3>
                  Integración con Android
                </h3>

              </div>

            </div>


            <div className="fitar-tech-list">

              <div className="fitar-tech-item">
                <span>
                  Expo Notifications
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  Expo Haptics
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  Android Widget
                </span>
              </div>

              <div className="fitar-tech-item">
                <span>
                  EAS Build
                </span>
              </div>

            </div>

          </article>


          {/* =================================================
              05 · VERSIONADO
          ================================================= */}

          <article className="fitar-tech-card">

            <div className="fitar-tech-card-header">

              <span className="fitar-tech-number">
                05
              </span>

              <div>

                <span>
                  DESARROLLO
                </span>

                <h3>
                  Control de versiones
                </h3>

              </div>

            </div>


            <div className="fitar-tech-list">

              <div className="fitar-tech-item">

                <img
                  src={git}
                  alt="Git"
                />

                <span>
                  Git
                </span>

              </div>

              <div className="fitar-tech-item">

                <img
                  src={github}
                  alt="GitHub"
                />

                <span>
                  GitHub
                </span>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          FUNCIONALIDADES
      ===================================================== */}

      <section
        className="fitar-features"
        id="fitar-funcionalidades"
      >

        <div className="fitar-section-heading fitar-features-heading">

          <span>
            FUNCIONALIDADES
          </span>

          <h2>
            Descubre lo que hace <strong>FitAR</strong>
            <span className="fitar-cursor">_</span>
          </h2>

          <p>
            Una aplicación pensada para centralizar la planificación
            del entrenamiento y facilitar el seguimiento de la evolución
            de cada usuario.
          </p>

        </div>


        {/* =================================================
            FUNCIONALIDAD 01
        ================================================= */}

        <article className="fitar-feature-block">

          <div className="fitar-feature-content">

            <div className="fitar-feature-number">
              01
            </div>

            <div className="fitar-feature-text">

              <span className="fitar-feature-label">
                RUTINAS · EJERCICIOS
              </span>

              <h3>
                Creación y gestión de rutinas
              </h3>

              <p>
                FitAR permite crear y organizar
                <strong> rutinas de entrenamiento personalizadas</strong>,
                seleccionando ejercicios y configurando la estructura
                de cada entrenamiento.
              </p>

              <p>
                Los usuarios pueden administrar
                <strong> ejercicios, series, repeticiones y pesos</strong>,
                además de incorporar ejercicios personalizados
                al catálogo disponible dentro de la aplicación.
              </p>

            </div>

          </div>


          <AutoMarqueeCarousel
            images={rutinasImages}
            title="Rutinas y ejercicios"
          />

        </article>


        {/* =================================================
            FUNCIONALIDAD 02
        ================================================= */}

        <article className="fitar-feature-block">

          <div className="fitar-feature-content">

            <div className="fitar-feature-number">
              02
            </div>

            <div className="fitar-feature-text">

              <span className="fitar-feature-label">
                ENTRENAMIENTO · TEMPORIZADOR
              </span>

              <h3>
                Seguimiento durante el entrenamiento
              </h3>

              <p>
                Durante cada sesión, FitAR permite registrar
                <strong> series, repeticiones y cargas utilizadas</strong>,
                manteniendo un seguimiento de los ejercicios realizados
                durante el entrenamiento.
              </p>

              <p>
                También incorpora un
                <strong> temporizador de entrenamiento y descanso</strong>,
                controles para ajustar los tiempos y
                <strong> respuesta háptica</strong> para acompañar
                determinadas acciones dentro de la aplicación.
              </p>

            </div>

          </div>


          <AutoMarqueeCarousel
            images={entrenamientoImages}
            title="Entrenamiento y temporizador"
          />

        </article>


        {/* =================================================
            FUNCIONALIDAD 03
        ================================================= */}

        <article className="fitar-feature-block">

          <div className="fitar-feature-content">

            <div className="fitar-feature-number">
              03
            </div>

            <div className="fitar-feature-text">

              <span className="fitar-feature-label">
                REGISTROS · PROGRESO
              </span>

              <h3>
                Registro y seguimiento del progreso
              </h3>

              <p>
                La aplicación conserva el historial de los entrenamientos
                realizados para consultar la evolución del usuario
                a lo largo del tiempo.
              </p>

              <p>
                FitAR incluye
                <strong> registros personales y estadísticas de entrenamiento</strong>,
                permitiendo consultar los resultados obtenidos
                y observar la evolución del rendimiento.
              </p>

            </div>

          </div>


          <AutoMarqueeCarousel
            images={registrosImages}
            title="Registros de entrenamiento"
          />


          <AutoMarqueeCarousel
            images={progresoImages}
            title="Progreso y estadísticas"
          />

        </article>

      </section>


      {/* =====================================================
          DESCARGA APK
      ===================================================== */}

      <section className="fitar-download-section">

        <div className="fitar-download-decoration">

          <span />
          <span />
          <span />

        </div>


        <div className="fitar-download-content">

          <span className="fitar-download-eyebrow">
            DISPONIBLE PARA ANDROID
          </span>

          <h2>
            Probá <strong>FitAR</strong>
            <span className="fitar-cursor">_</span>
          </h2>

          <p>
            Descargá la versión Android de FitAR y conocé directamente
            la aplicación, sus funcionalidades y la experiencia
            de entrenamiento desarrollada.
          </p>


          <div className="fitar-download-details">

            <div>
              <span>
                PLATAFORMA
              </span>

              <strong>
                Android
              </strong>
            </div>

            <div>
              <span>
                FORMATO
              </span>

              <strong>
                APK
              </strong>
            </div>

            <div>
              <span>
                APLICACIÓN
              </span>

              <strong>
                FitAR
              </strong>
            </div>

          </div>


          <a
            href="https://drive.google.com/file/d/1hF1qCJhSF5z8GBtbE_iAsN9JWZjSlu0u/view?usp=sharing"
            className="fitar-download-button"
            download
          >

            <span className="fitar-download-icon">
              ↓
            </span>

            <span>
              Descargar APK
            </span>

          </a>


          <p className="fitar-download-note">
            Versión Android de prueba. La instalación puede requerir
            habilitar temporalmente la instalación de aplicaciones
            desde fuentes externas en el dispositivo.
          </p>

        </div>

      </section>


      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className="fitar-closing">

        <div className="fitar-closing-line" />

        <p>
          FitAR combina desarrollo mobile, almacenamiento local,
          herramientas nativas y seguimiento de datos para ofrecer
          una experiencia completa de entrenamiento.
        </p>

        <div className="fitar-closing-line" />

      </section>

    </main>
  )
}

