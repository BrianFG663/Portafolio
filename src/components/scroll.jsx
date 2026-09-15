import { useEffect, useRef, useState } from 'react'
import '../utils/scroll.css'

export default function ScrollDecorativo() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const timeoutRef = useRef(null)
  const lastIndexRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionHeight = window.innerHeight * 0.85

      const currentIndex = Math.floor(scrollPosition / sectionHeight)

      setIndex(currentIndex)

      // Solo hacemos la transición cuando realmente cambia de sección.
      if (currentIndex !== lastIndexRef.current) {
        lastIndexRef.current = currentIndex

        setVisible(false)

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setVisible(true)
        }, 180)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isRight = index % 2 === 0

  return (
    <div
      className={[
        'scroll-deco',
        isRight ? 'right' : 'left',
        visible ? 'show' : 'hide',
      ].join(' ')}
      aria-hidden="true"
    >
      <span>SCROLL</span>
      <div className="line" />
    </div>
  )
}
