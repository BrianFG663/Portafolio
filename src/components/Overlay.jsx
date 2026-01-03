import React, { useEffect, useState } from 'react'
import '../utils/overlay.css'

export default function OverlaySimbolos() {
  const simbolos = [
  '</>', 
  'error404', 
  '{ }', 
  '=>', 
  'function()', 
  'console.log',
  'null',
  'undefined',
  'NaN',
  'true',
  'false',
  'if()',
  'else',
  'while()',
  'for()',
  'return',
  'import',
  'export',
  'class',
  'new',
  'try{}catch{}',
  'async',
  'await',
  'Promise',
  'const',
  'let',
  'var',
  '===',
  '!==',
  '&&',
  '||',
  '++',
  '--',
  '#include',
  'printf()',
  'System.out.println',
  '<script>',
  '</html>',
  'SELECT *',
  'INSERT INTO',
  'UPDATE',
  'DELETE',
  '404',
  '200 OK',
  '500',
  'stack overflow',
  'git commit',
  'npm install',
  'yarn dev'
]


  const [items, setItems] = useState([])

  useEffect(() => {
    // generar posiciones aleatorias
    const nuevos = Array.from({ length: 12 }).map((_, i) => ({
        simbolo: simbolos[Math.floor(Math.random() * simbolos.length)],
        top: (i * 12) + Math.random() * 5,   // escalonado en vertical
        left: (i * 12) + Math.random() * 5,  // escalonado en horizontal
        size: 16 + Math.random() * 32,
        rot: Math.random() * 360,
    }))

    setItems(nuevos)
  }, [])

  return (
    <div className="overlay-simbolos">
      {items.map((item, i) => (
        <span
          key={i}
          className="simbolo"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            transform: `rotate(${item.rot}deg)`,
          }}
        >
          {item.simbolo}
        </span>
      ))}
    </div>
  )
}
