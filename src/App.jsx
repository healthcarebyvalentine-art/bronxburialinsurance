import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import CostReality from './components/CostReality'
import WhoIsThisFor from './components/WhoIsThisFor'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Credentials from './components/Credentials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <CostReality />
        <WhoIsThisFor />
        <Process />
        <Reviews />
        <Credentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
