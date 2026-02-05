import { useEffect, useState } from 'react'
import '../utils/scroll.css'

export default function ScrollDecorativo() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const step = 600

    const onScroll = () => {
      const current = Math.floor(window.scrollY / step)
      setIndex(current)

      // pequeño fade out / in al cambiar
      setVisible(false)
      clearTimeout(window.__scrollTimeout)
      window.__scrollTimeout = setTimeout(() => {
        setVisible(true)
      }, 150)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isRight = index % 2 === 0

  return (
    <div
      className={`
        scroll-deco
        ${isRight ? 'right' : 'left'}
        ${visible ? 'show' : 'hide'}
      `}
      style={{ top: '15%' }}
    >
      <span>SCROLL</span>
      <div className="line" />
    </div>
  )
}
