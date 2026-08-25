import { useEffect, useState } from 'react'
import IntroLoader from './components/IntroLoader'
// import TargetCursor from './components/TargetCursor'
import Header from './components/Header'
// import SectionNav from './components/SectionNav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import SectionTransition from './components/SectionTransition'
import Manifesto from './components/Manifesto'
import Trabalhos from './components/Trabalhos'
import Capacidades from './components/Capacidades'
import Posicionamento from './components/Posicionamento'
import Feed from './components/Feed'
import Metodo from './components/Metodo'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  // `introDone` só chega no fim da saída do loader; o Hero precisa começar a
  // animar quando a cortina COMEÇA a subir, senão ele é revelado já pronto e a
  // timeline toca depois, parecendo que a seção recarregou.
  const [introExiting, setIntroExiting] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [introDone])

  return (
    <div className="min-h-screen bg-asphalt">
      {!introDone && (
        <IntroLoader
          onExitStart={() => setIntroExiting(true)}
          onDone={() => setIntroDone(true)}
        />
      )}
      {/* <TargetCursor /> */}
      <Header />
      {/* <SectionNav /> */}
      <main>
        <SectionTransition
          color="#E0176A"
          next={<Manifesto />}
          preview={<Manifesto id={null} />}
        >
          <Hero ready={introExiting} />
        </SectionTransition>
       {/*  <Intro /> */}
        <Trabalhos />
         <Feed />
        <Capacidades />
        <Posicionamento />
       
        {/*  <Metodo />  */}
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
