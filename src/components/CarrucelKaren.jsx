import React, { useState } from 'react';
// Cambiamos el import al nuevo nombre del CSS
import '../utils/CarrucelKaren.css';

export default function CarruselObrAlq({ images, title = "Capturas" }) {
  // Duplicamos 4 veces para loop fluido sin huecos
  const trackImages = [
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (index) => {
    const originalIndex = index % images.length;
    setSelectedImg(originalIndex);
  };

  const closeLightbox = () => setSelectedImg(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="obr-alq-carrusel">
      <h3>{title}</h3>

      <div className="obr-alq-marquee-wrapper">
        <div className="obr-alq-marquee-track">
          {trackImages.map((src, index) => (
            <div key={index} className="obr-alq-marquee-item">
              <img
                src={src}
                alt={`${title} - captura ${(index % images.length) + 1}`}
                className="obr-alq-img"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pausa al hover */}
      <style jsx>{`
        .obr-alq-marquee-wrapper:hover .obr-alq-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Lightbox */}
      {selectedImg !== null && (
        <div
          className="obr-alq-lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <button className="obr-alq-btn-cerrar" onClick={closeLightbox}>×</button>
          <img
            src={images[selectedImg]}
            alt="Captura ampliada"
            className="obr-alq-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}