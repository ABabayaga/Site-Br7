import { useEffect, useState } from 'react'
import IntroLoader from './components/IntroLoader'
// import TargetCursor from './components/TargetCursor'
import Header from './components/Header'
import SectionNav from './components/SectionNav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Manifesto from './components/Manifesto'
import Trabalhos from './components/Trabalhos'
import Capacidades from './components/Capacidades'
import Posicionamento from './components/Posicionamento'
import Metodo from './components/Metodo'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [introDone])

  return (
    <div className="min-h-screen bg-asphalt">
      {!introDone && <IntroLoader onDone={() => setIntroDone(true)} />}
      {/* <TargetCursor /> */}
      <Header />
      <SectionNav />
      <main>
        <Hero />
       {/*  <Intro /> */}
        <Manifesto />
        <Trabalhos />
        <Capacidades />
        <Posicionamento />
        {/*  <Metodo />  */}
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
