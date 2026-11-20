import { motion } from 'framer-motion'
import { site } from '../config/site'

const Line = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="leading-relaxed"><span className="text-c2">{k}</span> <span className="text-gray-500">=</span> {children}</div>
)

export default function About() {
  const a = site.about
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <h2 className="mb-12 font-mono text-sm tracking-[.3em] text-c1">// 02 — ABOUT</h2>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3"><i className="h-3 w-3 rounded-full bg-red-500/70" /><i className="h-3 w-3 rounded-full bg-yellow-500/70" /><i className="h-3 w-3 rounded-full bg-green-500/70" /><span className="ml-3 font-mono text-xs text-gray-500">about.ts</span></div>
        <div className="space-y-4 p-6 font-mono text-sm sm:text-base">
          <Line k="bio"><span className="text-gray-200">"{a.text}"</span></Line>
          <Line k="interests"><span className="mt-2 flex flex-wrap gap-2">{a.interests.map(t => <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-300">{t}</span>)}</span></Line>
          <Line k="skills"><span className="mt-2 flex flex-wrap gap-2">{a.skills.map(t => <span key={t} className="rounded-md px-2 py-1 text-xs text-white" style={{ background: 'linear-gradient(90deg,var(--c1),var(--c2))' }}>{t}</span>)}</span></Line>
          <Line k="working_on"><span className="mt-1 block">{a.working.map(w => <span key={w} className="block text-gray-300">› {w}</span>)}</span></Line>
        </div>
      </motion.div>
    </section>
  )
}
