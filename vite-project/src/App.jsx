import { useState } from 'react'
import './App.css'
import { Herosection } from './page/HeroSection'
import HomaPage from './page/HomePage'
import LoginPage from './page/LoginPgae'
import ReducerHook from './page/reducerhook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomaPage />
      <Herosection />
      <LoginPage/>
      <ReducerHook/>
    </>
  )
}

export default App
