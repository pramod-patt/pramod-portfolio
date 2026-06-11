import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProfessionalRoles from './components/ProfessionalRoles'
import Skills from './components/Skills'
import CurrentFocus from './components/CurrentFocus'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="roles">
          <ProfessionalRoles />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="focus">
          <CurrentFocus />
        </section>
        <section id="coming-soon">
          <ComingSoon />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
