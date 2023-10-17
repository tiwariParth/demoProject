import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import img from './components/vect.jpg'
import './index.css'
const App = () => {
  return (
    <div style={{
      background: `url(${img}) no-repeat center center/cover`,
  }}>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App