import { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './components/Footer'
import Feedback from './pages/Feedback'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Services/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
