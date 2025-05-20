import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import TechStackBanner from './Components/TeckStackBanner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'

function App() {
 

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <TechStackBanner />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
