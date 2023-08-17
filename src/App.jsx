import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero></Hero>
        <ContactForm></ContactForm>
      </main>
    </>
  )
}

export default App
