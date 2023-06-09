import { useState } from 'react'

import Nav from './components/Nav'
import About from './components/About/Index'
import Projects from './components/Projects/Index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
    </div>
  )
}

export default App
