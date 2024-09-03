import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // This is not a function. It's a componet. Componet is those type of function which return jsx code.
  const [count, setCount] = useState(0)
  const name = "Binayak"

  return (
    <>
    <h1 className='haha'>Hello {name}</h1>
    </>
  )
}

export default App
