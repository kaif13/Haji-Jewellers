import { useEffect, useRef } from 'react'

function DiamondCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!finePointer.matches) return undefined

    const cursor = cursorRef.current
    let frame
    let x = -40
    let y = -40

    document.documentElement.classList.add('diamond-cursor-enabled')

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      frame = undefined
    }

    const onPointerMove = (event) => {
      x = event.clientX
      y = event.clientY
      cursor.dataset.visible = 'true'

      if (frame === undefined) frame = requestAnimationFrame(render)
    }

    const onPointerOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, select, [role="button"]')
      cursor.dataset.interactive = interactive ? 'true' : 'false'
    }

    const onPointerDown = () => {
      cursor.dataset.pressed = 'true'
    }

    const onPointerUp = () => {
      cursor.dataset.pressed = 'false'
    }

    const onPointerLeave = () => {
      cursor.dataset.visible = 'false'
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerover', onPointerOver, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    document.documentElement.addEventListener('mouseleave', onPointerLeave)

    if (reduceMotion.matches) cursor.dataset.reducedMotion = 'true'

    return () => {
      document.documentElement.classList.remove('diamond-cursor-enabled')
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerover', onPointerOver)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      document.documentElement.removeEventListener('mouseleave', onPointerLeave)
      if (frame !== undefined) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="diamond-cursor"
      data-visible="false"
      data-interactive="false"
      data-pressed="false"
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" role="presentation">
        <defs>
          <linearGradient id="diamond-fill" x1="8" y1="8" x2="40" y2="42">
            <stop offset="0" stopColor="#fff8dc" />
            <stop offset="0.38" stopColor="#d8b76f" />
            <stop offset="0.72" stopColor="#a98232" />
            <stop offset="1" stopColor="#fff0bb" />
          </linearGradient>
          <filter id="diamond-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="diamond-cursor__gem"
          d="M24 5 39 17 24 43 9 17Z"
          fill="url(#diamond-fill)"
          stroke="#fff8eb"
          strokeWidth="1.25"
          filter="url(#diamond-glow)"
        />
        <path d="m9 17 15 5 15-5M24 5l-7 12 7 26 7-26Z" fill="none" stroke="#fff8eb" strokeOpacity=".72" />
        <circle className="diamond-cursor__spark" cx="36" cy="9" r="2" fill="#fff8eb" />
      </svg>
    </div>
  )
}

export default DiamondCursor
