import React from "react";
import "../utils/botones.css";

import github from "../assets/botones/github.png";
import linkedin from "../assets/botones/linkedin.png";
import gmail from "../assets/botones/gmail.png";

export default function Botones() {
  return (
    <div className="botones">
      <a
        href="https://github.com/BrianFG663"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <img src={github} className="imagen" alt="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/brian-gonzalez-a3014b36a/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <img src={linkedin} className="imagen" alt="LinkedIn" />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=briangonzaz305@gmail.com&su=Contacto%20profesional%20%E2%80%93%20Oportunidad%20de%20empleo&body=Hola%20Brian,%0A%0AMi%20nombre%20es%20______%20y%20te%20escribo%20porque%20nos%20interes%C3%B3%20tu%20perfil%20profesional.%0ANos%20gustar%C3%ADa%20ponernos%20en%20contacto%20para%20conversar%20sobre%20una%20posible%20oportunidad%20de%20empleo.%0A%0AQuedamos%20atentos%20a%20tu%20respuesta.%0ASaludos."
        target="_blank"
        rel="noopener noreferrer"
        title="Contacto por correo electrónico"
        aria-label="Contacto por correo electrónico"
      >
        <img src={gmail} className="imagen" alt="Correo electrónico" />
      </a>
    </div>
  );
}
