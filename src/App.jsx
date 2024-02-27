import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BinaryInputBar from './components/BinaryInputBar'
import DecimalInput from './components/DecimalInput'
import { Typography } from '@mui/material'

function App() {
  const [decimalValue, setDecimalValue] = useState(0)

  return (
    <>
    <h1>Not Another Binary Calculator</h1>

    <div className='mainBar'>
      <BinaryInputBar totalDigits={8} setDecimalValue={setDecimalValue} decimalValue={decimalValue}/>
      <label>=</label>
      <DecimalInput setDecimalValue={setDecimalValue} decimalValue={decimalValue}/> 
    </div>
    </>
  )
}

export default App
