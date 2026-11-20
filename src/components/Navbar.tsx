import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../config/site'

const items = [['Links', '#links'], ['About', '#about'], ['Projects', '#projects'], ['Contact', '#contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setScrolled(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${scrolled ? 'glass mx-3 rounded-2xl py-2 md:mx-auto' : ''}`}>
        <a href="#top" className="font-mono text-lg font-semibold"><span className="grad-text">&lt;{site.name}/&gt;</span></a>
        <ul className="hidden gap-8 md:flex">
          {items.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-gray-300 transition hover:text-c1">{l}</a></li>)}
        </ul>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mx-3 mt-2 rounded-2xl p-4 md:hidden">
            {items.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-white/5">{l}</a></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
