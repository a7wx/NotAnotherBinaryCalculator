import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BinaryInputBar from './components/BinaryInputBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BinaryInputBar totalDigits={4}/>
    </>
  )
}

export default App
