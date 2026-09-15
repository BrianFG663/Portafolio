import React, { useState } from 'react'
import '../utils/AutoMarqueeCarousel.css'

export default function AutoMarqueeCarousel({
  images,
  title = 'Capturas',
}) {

  const trackImages = [
    ...images,
    ...images,
    ...images,
    ...images,
  ]

  const [selectedImg, setSelectedImg] = useState(null)

  const openLightbox = (index) => {
    const originalIndex = index % images.length
    setSelectedImg(originalIndex)
  }

  const closeLightbox = () => {
    setSelectedImg(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  return (
    <div className="amc-container">

      {title && (
        <div className="amc-heading">
          <span>CAPTURAS</span>
          <h3>{title}</h3>
        </div>
      )}

      <div className="amc-wrapper">

        <div className="amc-track">

          {trackImages.map((src, index) => (
            <div
              key={`${index}-${src}`}
              className="amc-item"
            >
              <button
                type="button"
                className="amc-image-button"
                onClick={() => openLightbox(index)}
                aria-label={`Ampliar captura ${(
                  index % images.length
                ) + 1}`}
              >
                <img
                  src={src}
                  alt={`${title} - captura ${
                    (index % images.length) + 1
                  }`}
                  className="amc-image"
                />
              </button>
            </div>
          ))}

        </div>

      </div>

      {selectedImg !== null && (
        <div
          className="amc-lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de captura"
        >

          <button
            type="button"
            className="amc-close"
            onClick={closeLightbox}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <img
            src={images[selectedImg]}
            alt="Captura ampliada"
            className="amc-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </div>
  )
}