import { useState } from 'react'
import './App.css'
import ValueRow from './components/ValueRow'

function App() {
  const [decimalValues, setDecimalValues] = useState([0, 0, 0])
  const rowNames = ["1", "2", "3"]
  return (
    <>
    <h1>Not Another Binary Calculator</h1>
    {decimalValues.map((item, index) => 
    <ValueRow key={index} rowDecimalValue={item} rowName={rowNames[index]} />)}
    </>
  )
}

export default App
