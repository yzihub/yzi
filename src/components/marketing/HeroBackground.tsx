'use client'

import { useEffect, useRef } from 'react'

function hexRgb(hex: string) {
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`
}

// Lightweight multi-harmonic noise (Perlin-like without library)
function fbm(x: number, y: number, t: number): number {
  return (
    Math.sin(x * 1.3 + t * 0.6)  * 0.40 +
    Math.sin(x * 0.7 + y * 0.5 + t * 0.35) * 0.28 +
    Math.sin(x * 2.1 + y * 0.9 + t * 1.0)  * 0.18 +
    Math.sin(x * 0.4 + y * 1.3 + t * 0.45) * 0.14
  )
}

type Band = {
  yFrac:     number   // 0..1 vertical center
  height:    number   // px height of the band
  color:     string   // hex
  opacity:   number
  speed:     number   // time multiplier
  ns:        number   // noise x-scale
  amp:       number   // px displacement amplitude
  blendMode: GlobalCompositeOperation
}

const BANDS: Band[] = [
  // ─── background glow ────────────────────────────────────────────
  { yFrac: 0.18, height: 220, color: '#14B8A6', opacity: 0.055, speed: 0.18, ns: 0.0025, amp: 55, blendMode: 'screen' },
  { yFrac: 0.52, height: 260, color: '#22D3EE', opacity: 0.065, speed: 0.14, ns: 0.0018, amp: 65, blendMode: 'screen' },
  { yFrac: 0.78, height: 190, color: '#14B8A6', opacity: 0.045, speed: 0.22, ns: 0.003,  amp: 45, blendMode: 'screen' },
  // ─── mid bands ──────────────────────────────────────────────────
  { yFrac: 0.32, height: 110, color: '#22D3EE', opacity: 0.18,  speed: 0.38, ns: 0.005,  amp: 32, blendMode: 'screen' },
  { yFrac: 0.62, height:  90, color: '#0EA5E9', opacity: 0.14,  speed: 0.44, ns: 0.006,  amp: 26, blendMode: 'screen' },
  // ─── foreground highlight ────────────────────────────────────────
  { yFrac: 0.27, height:  44, color: '#22D3EE', opacity: 0.40,  speed: 0.65, ns: 0.009,  amp: 22, blendMode: 'screen' },
  { yFrac: 0.60, height:  32, color: '#14B8A6', opacity: 0.34,  speed: 0.52, ns: 0.008,  amp: 18, blendMode: 'screen' },
]

function drawBand(ctx: CanvasRenderingContext2D, band: Band, w: number, h: number, t: number) {
  const cy   = band.yFrac * h
  const half = band.height / 2
  const step = 5

  // Build top distorted edge
  ctx.beginPath()
  for (let x = 0; x <= w; x += step) {
    const d = fbm(x * band.ns, 0.0, t * band.speed) * band.amp
    const y = cy - half + d
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }

  // Build bottom distorted edge (reversed, different phase)
  for (let x = w; x >= 0; x -= step) {
    const d = fbm(x * band.ns, 1.7, t * band.speed + 1.2) * band.amp
    const y = cy + half + d
    ctx.lineTo(x, y)
  }

  ctx.closePath()

  // Soft vertical gradient inside band
  const grad = ctx.createLinearGradient(0, cy - half, 0, cy + half)
  const rgb  = hexRgb(band.color)
  grad.addColorStop(0.00, `rgba(${rgb},0)`)
  grad.addColorStop(0.35, `rgba(${rgb},${band.opacity})`)
  grad.addColorStop(0.50, `rgba(${rgb},${band.opacity * 1.6})`)
  grad.addColorStop(0.65, `rgba(${rgb},${band.opacity})`)
  grad.addColorStop(1.00, `rgba(${rgb},0)`)

  ctx.fillStyle = grad
  ctx.fill()
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, animId: number, t = 0

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.007

      ctx.globalCompositeOperation = 'screen'

      for (const band of BANDS) {
        ctx.save()
        drawBand(ctx, band, w, h, t)
        ctx.restore()
      }

      ctx.globalCompositeOperation = 'source-over'
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* SVG grain filter definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="hero-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
            <feBlend in="SourceGraphic" in2="grey" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: '#020617',
          filter: 'url(#hero-grain)',
          opacity: 0.55,
        }}
      />

      {/* Canvas — bands + distortion */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  )
}
