import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Link2 } from 'lucide-react'
import { site } from '../config/site'

function useTyping(words: string[]) {
  const [t, setT] = useState('')
  useEffect(() => {
    let i = 0, j = 0, del = false, id = 0
    const tick = () => {
      const w = words[i]; j += del ? -1 : 1; setT(w.slice(0, j)); let d = del ? 35 : 70
      if (!del && j === w.length) { del = true; d = 1400 } else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 300 }
      id = window.setTimeout(tick, d)
    }
    id = window.setTimeout(tick, 300); return () => clearTimeout(id)
  }, [words])
  return t
}

export default function Hero() {
  const typed = useTyping(site.tagline)
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 pt-24 md:flex-row md:justify-between">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: .7 }} className="text-center md:text-left">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" /></span>{site.status}
        </span>
        <h1 className="mt-5 text-5xl font-bold leading-none sm:text-7xl md:text-8xl"><span className="grad-text">{site.name}</span></h1>
        <p className="mt-5 min-h-[2rem] font-mono text-base text-gray-300 sm:text-xl" aria-label={site.tagline.join(' | ')}>{typed}<span className="animate-pulse text-c1">▌</span></p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href="#links" className="btn btn-main"><Link2 size={18} />View My Links</a>
          <a href="#contact" className="btn btn-ghost"><Mail size={18} />Contact Me</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: .7 }} className="relative">
        <div className="absolute -inset-4 animate-spin rounded-full opacity-60 blur-md [animation-duration:8s]" style={{ background: 'conic-gradient(from 0deg,var(--c1),var(--c2),transparent,var(--c1))' }} />
        <img src={site.avatar} alt={`${site.name} avatar`} width={288} height={288} className="relative h-56 w-56 rounded-full border-4 border-[#05050a] object-cover sm:h-72 sm:w-72" />
      </motion.div>
    </section>
  )
}
