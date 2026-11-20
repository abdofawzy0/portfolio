import { useEffect, useState } from 'react'
import { site } from './config/site'
import { Background, Cursor, Loader, Toast, ScrollTop } from './components/Effects'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Links from './sections/Links'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--c1', site.colors.c1); r.setProperty('--c2', site.colors.c2)
    const t = setTimeout(() => setReady(true), 1300); return () => clearTimeout(t)
  }, [])
  return (
    <>
      <Loader done={ready} /><Background /><Cursor /><Navbar />
      <main><Hero /><Links /><About /><Projects /><Contact /></main>
      <Toast /><ScrollTop />
    </>
  )
}
