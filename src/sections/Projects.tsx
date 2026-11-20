import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { site } from '../config/site'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <h2 className="mb-12 font-mono text-sm tracking-[.3em] text-c1">// 03 — PROJECTS</h2>
      <ol className="divide-y divide-white/10 border-y border-white/10">
        {site.projects.map((p, i) => (
          <motion.li key={p.name} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group grid items-center gap-6 py-8 transition hover:bg-white/[.02] md:grid-cols-[60px_1fr_220px]">
            <span className="font-mono text-3xl text-white/20 transition group-hover:text-c1">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-2xl font-bold transition group-hover:translate-x-2">{p.name}</h3>
              <p className="mt-2 max-w-xl text-gray-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-c2">{p.tech.map(t => <span key={t}>#{t}</span>)}</div>
              <div className="mt-4 flex gap-3">
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3 !py-1.5 text-sm"><ExternalLink size={14} />Live</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3 !py-1.5 text-sm"><Code2 size={14} />GitHub</a>}
              </div>
            </div>
            <div aria-hidden className="hidden h-28 rounded-xl border border-white/10 transition duration-500 group-hover:scale-105 group-hover:rotate-1 md:block" style={{ background: `linear-gradient(135deg,hsl(${p.hue} 80% 55% / .35),hsl(${p.hue + 50} 80% 45% / .15))` }} />
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
