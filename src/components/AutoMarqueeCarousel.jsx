import React, { useState } from 'react';
import '../utils/AutoMarqueeCarousel.css'

export default function AutoMarqueeCarousel({ images, title = "Capturas" }) {
  // Duplicamos 4 veces para loop muy fluido y sin huecos visibles
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
    <div className="carrusel-screenshots">
      <h3>{title}</h3>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {trackImages.map((src, index) => (
            <div key={index} className="marquee-item">
              <img
                src={src}
                alt={`${title} - captura ${ (index % images.length) + 1 }`}
                className="marquee-img-large"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pausa al hover */}
      <style jsx>{`
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Lightbox compartido */}
      {selectedImg !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <button className="btn-cerrar" onClick={closeLightbox}>×</button>
          <img
            src={images[selectedImg]}
            alt="Captura ampliada"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}