import React from 'react'
import { Navbar } from './components/Navbar'
import Home, { About } from './pages/Home'

const App = () => {
  return (
    <div>
      Hello World
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
