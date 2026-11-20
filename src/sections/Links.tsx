import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, MessageCircle, Camera, Users, Music2, Play, Send, Code2, AtSign, Tv, Link as LinkIcon } from 'lucide-react'
import { site } from '../config/site'
import { copy } from '../lib/copy'

// أيقونات Lucide العامة (لا توجد أيقونات علامات تجارية رسمية في الحزمة)
const icons: Record<string, typeof Copy> = { discord: MessageCircle, instagram: Camera, facebook: Users, tiktok: Music2, youtube: Play, telegram: Send, github: Code2, x: AtSign, twitch: Tv, link: LinkIcon }

export default function Links() {
  return (
    <section id="links" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <h2 className="mb-12 font-mono text-sm tracking-[.3em] text-c1">// 01 — FIND ME</h2>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <motion.aside initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass glow h-fit rounded-3xl p-6 text-center lg:sticky lg:top-24">
          <img src={site.avatar} alt="" width={96} height={96} className="mx-auto h-24 w-24 rounded-full border-2 border-c1" />
          <h3 className="mt-4 text-2xl font-bold">{site.name}</h3>
          <p className="font-mono text-sm text-c1">{site.handle}</p>
          <p className="mt-3 text-sm text-gray-400">{site.bio}</p>
          <div className="mt-4 flex justify-center gap-4 font-mono text-xs text-gray-300">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400" />{site.status}</span>
            <span>{site.socials.length} platforms</span>
          </div>
          <button onClick={() => copy(site.siteUrl || location.href, 'Profile link copied')} className="btn btn-main mt-5 w-full justify-center"><Copy size={16} />Copy Profile Link</button>
        </motion.aside>
        <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2">
          {site.socials.map((s, i) => {
            const Icon = icons[s.icon] ?? LinkIcon
            return (
              <motion.li key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className={i === 0 ? 'sm:col-span-2' : ''}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} — opens in a new tab`}
                  className="glass group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-c1 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--c1)_35%,transparent)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-c1 transition group-hover:scale-110 group-hover:bg-c1 group-hover:text-white"><Icon size={22} /></span>
                  <span className="min-w-0 flex-1"><span className="block font-semibold">{s.name}</span><span className="block truncate font-mono text-xs text-gray-400">{s.user}</span></span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 transition group-hover:text-c1">Visit<ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
