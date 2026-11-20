import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Check } from 'lucide-react'

export function Background() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current!, ctx = cv.getContext('2d')!
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0, h = 0, raf = 0
    const resize = () => { w = cv.width = innerWidth; h = cv.height = innerHeight }
    resize(); addEventListener('resize', resize)
    const n = innerWidth < 640 ? 25 : 55
    const ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }))
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const c = getComputedStyle(document.documentElement).getPropertyValue('--c1').trim()
      ps.forEach((p, i) => {
        p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h
        ctx.fillStyle = c; ctx.globalAlpha = .6; ctx.fillRect(p.x, p.y, 2, 2)
        for (let j = i + 1; j < n; j++) { const q = ps[j], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 110) { ctx.globalAlpha = (1 - d / 110) * .18; ctx.strokeStyle = c; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke() } }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse at center,#000 30%,transparent 75%)' }} />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-30" style={{ background: 'var(--c1)' }} />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-25" style={{ background: 'var(--c2)' }} />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  )
}

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e: MouseEvent) => { ref.current!.style.transform = `translate(${e.clientX - 150}px,${e.clientY - 150}px)` }
    addEventListener('mousemove', move); return () => removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[300px] w-[300px] rounded-full opacity-20 blur-3xl md:block" style={{ background: 'radial-gradient(circle,var(--c1),transparent 70%)' }} />
}

export function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: .5 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#05050a]">
          <div className="w-56 text-center font-mono text-sm text-c1">
            <p className="mb-3 tracking-widest">INITIALIZING...</p>
            <div className="h-1 overflow-hidden rounded bg-white/10"><motion.div className="h-full" style={{ background: 'linear-gradient(90deg,var(--c1),var(--c2))' }} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2, ease: 'easeInOut' }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Toast() {
  const [msg, setMsg] = useState<string | null>(null)
  useEffect(() => {
    let t: number
    const on = (e: Event) => { setMsg((e as CustomEvent).detail); clearTimeout(t); t = window.setTimeout(() => setMsg(null), 2000) }
    addEventListener('toast', on); return () => removeEventListener('toast', on)
  }, [])
  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2">
      <AnimatePresence>
        {msg && <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="glass glow flex items-center gap-2 rounded-xl px-4 py-3 text-sm"><Check size={16} className="text-c1" />{msg}</motion.div>}
      </AnimatePresence>
    </div>
  )
}

export function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 600); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <AnimatePresence>
      {show && <motion.button aria-label="Scroll to top" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} className="glass glow fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full hover:border-c1"><ArrowUp size={20} /></motion.button>}
    </AnimatePresence>
  )
}
