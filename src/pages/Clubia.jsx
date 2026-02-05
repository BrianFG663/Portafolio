import React from 'react'
import { Plyr } from 'plyr-react'
import 'plyr-react/plyr.css'
import '../utils/cubia.css'
import video from '../assets/videos/prueba.mp4'
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
import ScrollIndicator from '../components/scroll'

export default function Clubia() {
  return ( 
    <div className="contenedorClubia">
      <ScrollIndicator/>


        <h2 id='seccionUno'>Conoce mas sobre <strong>Clubia</strong><span className="cursor">_</span></h2>
        <span><strong>Clubia</strong> es un sistema web para clubes enfocado en la gestión de socios, actividades y facturación, diseñado para mejorar la organización y eficiencia administrativa.</span>

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

      <div className='funcionalidades' id='seccionDos'>
        <h2>Descubre lo que hace <strong>clubia</strong><span className="cursor">_</span></h2>
        <div className='funcionalidadesSeccion'>
          <h3>Gestión integral de socios y actividades</h3>
          <span>
            Administración completa del <strong>padrón de socios</strong>, incluyendo <strong>alta, baja y modificación</strong>, <strong>tipos de socio</strong>, <strong>grupos familiares</strong> y <strong>estados (activo/inactivo)</strong>. <br />
            Permite la <strong>inscripción a actividades y subactividades</strong>, con <strong>paneles de control</strong> para visualizar <strong>socios inscriptos</strong>, <strong>reglas automáticas de inactividad por falta de pago</strong> y <strong>moderación de fotos</strong> para el <strong>carnet digital</strong>.
          </span>
        </div>

        <div className='funcionalidadesSeccion'>
          <h3>Facturación, ventas y control financiero</h3>
          <span>
            Sistema robusto de <strong>facturación mensual automática</strong> (<strong>masiva e individual</strong>), <strong>ventas presenciales</strong>, <strong>registro de pagos</strong>, <strong>notas de crédito</strong> y <strong>estado de cuenta de socios</strong>. <br />
            Incluye <strong>movimiento de cajas diarias</strong>, <strong>gestión de productos y categorías</strong>, <strong>facturación a proveedores</strong>, <strong>órdenes de compra con generación de PDF</strong> y <strong>control detallado de ingresos y egresos</strong>.
          </span>
        </div>

        <div className='funcionalidadesSeccion'>
          <h3>Plataforma administrativa y experiencia del socio</h3>
          <span>
            <strong>Panel administrativo</strong> con <strong>roles y permisos totalmente configurables</strong>, <strong>personalización visual del sistema</strong> (logo), <strong>estadísticas generales</strong> y <strong>gestión de empleados e instituciones</strong>. <br />
            Desde el lado del <strong>socio</strong>, acceso a un <strong>portal personal</strong> con <strong>datos personales</strong>, <strong>actividades</strong>, <strong>facturas</strong>, <strong>carnet digital</strong>, <strong>cambio de contraseña inicial</strong> y <strong>envío automático de emails</strong> con <strong>link de pago (Mercado Pago)</strong> y <strong>actualización en tiempo real del estado de las facturas</strong>.
          </span>
        </div>
      </div>


      <h2 className='titulotres'>Herramientas <strong>utilizadas</strong><span className="cursor">_</span></h2>
      <div className='contenedorLenguajes'>
        <div className='cartaLenguajes'>
          <h2>Lenguajes y frameworks</h2>
          <div>
            <img src={html} title='HTML' />
            <img src={css} title='CSS' />
            <img src={js} title='JavaScript' />
            <img src={php}  title='PHP'/>
            <img src={laravel} title='Laravel' />                        
            <img src={sql} title='MySql' />                      
          </div>
        </div>
        
        <div className='cartaLenguajes'>
          <h2>Tecnologias</h2>
          <div>
            <img src={git} title='Git' />
            <img src={github} title='GitHub' />
            <img src={npm} title='NPM' />
            <img src={terminal} title='Terminal Linux(Ubuntu)' />
            <img src={apache} title='Apache' />
            <img src={nginx} title='Nginx' />
          </div>
        </div>
      </div>
    </div>
  )
}
