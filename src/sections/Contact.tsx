import { motion } from 'framer-motion'
import { Copy, Mail, MessageCircle } from 'lucide-react'
import { site } from '../config/site'
import { copy } from '../lib/copy'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24 text-center">
      <h2 className="mb-6 font-mono text-sm tracking-[.3em] text-c1">// 04 — CONTACT</h2>
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold sm:text-6xl">Let's <span className="grad-text">connect.</span></motion.p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a href={`mailto:${site.email}`} className="btn btn-main"><Mail size={18} />Email</a>
        <button onClick={() => copy(site.discordUsername, 'Discord username copied')} className="btn btn-ghost"><MessageCircle size={18} />{site.discordUsername}<Copy size={14} className="opacity-60" /></button>
        <button onClick={() => copy(site.email, 'Email copied')} className="btn btn-ghost"><Copy size={16} />Copy Email</button>
      </div>
      <footer className="mt-24 font-mono text-xs text-gray-500">© {new Date().getFullYear()} {site.name}. Built with React + Vite.</footer>
    </section>
  )
}
