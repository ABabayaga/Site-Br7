import Header from './components/Header'
import SectionNav from './components/SectionNav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Trabalhos from './components/Trabalhos'
import Capacidades from './components/Capacidades'
import Metodo from './components/Metodo'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-asphalt">
      <Header />
      <SectionNav />
      <main>
        <Hero />
        <Intro />
        <Trabalhos />
        <Capacidades />
        <Metodo />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
