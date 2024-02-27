import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BinaryInputBar from './components/BinaryInputBar'
import DecimalInput from './components/DecimalInput'

function App() {
  const [decimalValue, setDecimalValue] = useState(0)

  return (
    <div className='mainBar'>
      <BinaryInputBar totalDigits={8} setDecimalValue={setDecimalValue} decimalValue={decimalValue}/>
      <label>=</label>
      <DecimalInput setDecimalValue={setDecimalValue} decimalValue={decimalValue}/> 
    </div>
  )
}

export default App
