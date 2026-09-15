import '../utils/paginaProyectos.css'
import AutoMarqueeCarousel from '../components/AutoMarqueeCarousel'

import php from '../assets/lenguajes/php.png'
import tail from '../assets/lenguajes/css.png'
import html from '../assets/lenguajes/html.png'
import js from '../assets/lenguajes/js.png'
import laravel from '../assets/lenguajes/laravel.png'
import sql from '../assets/lenguajes/mysql.png'
import git from '../assets/lenguajes/git.png'
import github from '../assets/lenguajes/github.png'
import npm from '../assets/lenguajes/npm.png'
import node from '../assets/lenguajes/node.png'
import laragon from '../assets/lenguajes/laragon.png'

import login from '../assets/mabra/Login.PNG'
import registro from '../assets/mabra/Registro.PNG'
import inicio from '../assets/mabra/inicio.PNG'
import alertas from '../assets/mabra/alertas.jpg'

import deudas from '../assets/mabra/deudores.PNG'
import deudeaspc from '../assets/mabra/deudapc.PNG'
import deudapp from '../assets/mabra/deudapp.PNG'

import agregarArticulo from '../assets/mabra/agregarArticulo.PNG'
import controlStock from '../assets/mabra/controlStock.PNG'
import edicionUno from '../assets/mabra/edicionUno.PNG'
import edicionDos from '../assets/mabra/edicionDos.PNG'
import Ventas from '../assets/mabra/Ventas.PNG'
import registroVentas from '../assets/mabra/registroVentas.PNG'

import pedidos from '../assets/mabra/pedidos.PNG'
import pedidodescarga from '../assets/mabra/pedidodescarga.PNG'
import presupuestos from '../assets/mabra/presupuestos.PNG'
import presupuestoconf from '../assets/mabra/presupuestoconf.PNG'
import excel from '../assets/mabra/Ventas.PNG'

import ScrollIndicator from '../components/scroll'

const gestionComercialImages = [
  pedidos,
  pedidodescarga,
  excel,
  presupuestos,
  presupuestoconf,
]

const deudaImages = [
  deudas,
  deudeaspc,
  deudapp,
  registro,
]

const gestionImages = [
  agregarArticulo,
  controlStock,
  edicionUno,
  edicionDos,
  Ventas,
  registroVentas,
]

const loginImages = [
  login,
  registro,
  inicio,
  alertas,
]

export default function MabraOps() {
  return (
    <main className="asistenciaPagina">
      <ScrollIndicator />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="asistenciaHero">

        <div className="asistenciaHeroEtiqueta">
          PROYECTO · MABRAOPS
        </div>

        <h1 className="asistenciaHeroTitulo">
          Conoce más sobre <strong>MabraOps</strong>
          <span className="asistenciaCursor">_</span>
        </h1>

        <p className="asistenciaHeroDescripcion">
          <strong>Sistema web de gestión de negocio</strong> diseñado para la{' '}
          <strong>administración integral de operaciones comerciales</strong>,
          orientado a mejorar el <strong>control, la trazabilidad y la
          automatización de procesos</strong> dentro de{' '}
          <strong>pequeñas y medianas empresas</strong>, facilitando la{' '}
          <strong>centralización de tareas diarias</strong> y el{' '}
          <strong>seguimiento de la actividad comercial</strong>.
        </p>

        <div className="asistenciaHeroLinea" />

      </section>

      {/* =====================================================
          VISTA GENERAL
          ===================================================== */}

      <section className="asistenciaVistaPrincipal">

        <div className="asistenciaSeccionEtiqueta">
          VISTA GENERAL
        </div>

        <AutoMarqueeCarousel
          images={loginImages}
          title=""
        />

      </section>

      {/* =====================================================
          STACK TECNOLÓGICO
          ===================================================== */}

      <section className="asistenciaTecnologias">

        <div className="asistenciaSeccionEncabezado">

          <span className="asistenciaSeccionEtiqueta">
            STACK TECNOLÓGICO
          </span>

          <h2 className="asistenciaSeccionTitulo">
            Herramientas <strong>utilizadas</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Tecnologías y herramientas utilizadas durante el desarrollo,
            prueba y puesta en funcionamiento del sistema.
          </p>

        </div>

        <div className="asistenciaTecnologiasGrid">

          {/* =========================
              LENGUAJES Y FRAMEWORKS
              ========================= */}

          <article className="asistenciaTecnologiaCard">

            <div className="asistenciaTecnologiaCardHeader">

              <span className="asistenciaTecnologiaNumero">
                01
              </span>

              <h3>
                Lenguajes y frameworks
              </h3>

            </div>

            <div className="asistenciaTecnologiaLista">

              <div className="asistenciaTecnologia">
                <img
                  src={html}
                  title="HTML"
                  alt="HTML"
                />
                <span>HTML</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={tail}
                  title="Tailwind CSS"
                  alt="Tailwind CSS"
                />
                <span>Tailwind CSS</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={js}
                  title="JavaScript"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={php}
                  title="PHP"
                  alt="PHP"
                />
                <span>PHP</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={laravel}
                  title="Laravel"
                  alt="Laravel"
                />
                <span>Laravel</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={sql}
                  title="MySQL"
                  alt="MySQL"
                />
                <span>MySQL</span>
              </div>

            </div>

          </article>

          {/* =========================
              HERRAMIENTAS
              ========================= */}

          <article className="asistenciaTecnologiaCard">

            <div className="asistenciaTecnologiaCardHeader">

              <span className="asistenciaTecnologiaNumero">
                02
              </span>

              <h3>
                Herramientas
              </h3>

            </div>

            <div className="asistenciaTecnologiaLista">

              <div className="asistenciaTecnologia">
                <img
                  src={git}
                  title="Git"
                  alt="Git"
                />
                <span>Git</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={github}
                  title="GitHub"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={npm}
                  title="NPM"
                  alt="NPM"
                />
                <span>NPM</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={laragon}
                  title="Laragon"
                  alt="Laragon"
                />
                <span>Laragon</span>
              </div>

              <div className="asistenciaTecnologia">
                <img
                  src={node}
                  title="Node.js"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          FUNCIONALIDADES
          ===================================================== */}

      <section className="asistenciaFuncionalidades">

        <div className="asistenciaFuncionalidadesEncabezado">

          <span className="asistenciaSeccionEtiqueta">
            FUNCIONALIDADES
          </span>

          <h2 className="asistenciaSeccionTitulo">
            Descubre lo que hace <strong>MabraOps</strong>
            <span className="asistenciaCursor">_</span>
          </h2>

          <p className="asistenciaSeccionDescripcion">
            Una solución orientada a centralizar las operaciones comerciales
            y facilitar el control de las actividades diarias del negocio.
          </p>

        </div>

        {/* =================================================
            FUNCIONALIDAD 01
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              01
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                USUARIOS · SEGURIDAD
              </span>

              <h3>
                Gestión de usuarios y control de acceso
              </h3>

              <p>
                Sistema de{' '}
                <strong>
                  administración de usuarios con roles y permisos
                </strong>
                , permitiendo definir distintos niveles de acceso dentro de
                la aplicación.
              </p>

              <p>
                Incluye{' '}
                <strong>
                  registro y auditoría de acciones realizadas por los
                  usuarios
                </strong>
                , facilitando el{' '}
                <strong>
                  control, la seguridad y la trazabilidad de la actividad
                </strong>{' '}
                dentro del sistema.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={deudaImages}
            title=""
          />

        </article>

        {/* =================================================
            FUNCIONALIDAD 02
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              02
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                PRODUCTOS · STOCK · VENTAS
              </span>

              <h3>
                Gestión de productos y control comercial
              </h3>

              <p>
                Administración completa de{' '}
                <strong>
                  productos y catálogo comercial
                </strong>
                , con herramientas para el{' '}
                <strong>
                  manejo de stock
                </strong>
                ,{' '}
                <strong>
                  registro de ventas
                </strong>{' '}
                y{' '}
                <strong>
                  control de caja diaria
                </strong>.
              </p>

              <p>
                Permite realizar{' '}
                <strong>
                  actualizaciones masivas de precios
                </strong>{' '}
                y utilizar un{' '}
                <strong>
                  sistema de búsqueda rápida de artículos
                </strong>
                , optimizando la gestión y el mantenimiento del inventario.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={gestionImages}
            title=""
          />

        </article>

        {/* =================================================
            FUNCIONALIDAD 03
            ================================================= */}

        <article className="asistenciaFuncionalidad">

          <div className="asistenciaFuncionalidadContenido">

            <div className="asistenciaFuncionalidadNumero">
              03
            </div>

            <div>

              <span className="asistenciaFuncionalidadEtiqueta">
                PEDIDOS · PRESUPUESTOS · REPORTES
              </span>

              <h3>
                Gestión de pedidos, presupuestos y análisis comercial
              </h3>

              <p>
                Permite la{' '}
                <strong>
                  gestión de pedidos comerciales
                </strong>{' '}
                y el{' '}
                <strong>
                  procesamiento de pedidos de gran volumen
                </strong>
                , mediante carga de archivos y herramientas de organización
                de datos.
              </p>

              <p>
                Incluye la{' '}
                <strong>
                  generación de presupuestos en formato PDF
                </strong>{' '}
                listos para compartir con clientes, así como la{' '}
                <strong>
                  exportación de información a Excel
                </strong>.
              </p>

              <p>
                Además, ofrece{' '}
                <strong>
                  reportes de productos más vendidos
                </strong>
                , facilitando el{' '}
                <strong>
                  análisis del rendimiento comercial
                </strong>{' '}
                y la{' '}
                <strong>
                  toma de decisiones dentro del negocio
                </strong>.
              </p>

            </div>

          </div>

          <AutoMarqueeCarousel
            images={gestionComercialImages}
            title=""
          />

        </article>

      </section>

      {/* =====================================================
          CIERRE
          ===================================================== */}

      <section className="asistenciaCierre">

        <div className="asistenciaCierreLinea" />

        <span>MABRAOPS</span>

        <p>
          Sistema web desarrollado para centralizar la gestión comercial,
          optimizar procesos y facilitar el control de las operaciones
          del negocio.
        </p>

      </section>

    </main>
  )
}