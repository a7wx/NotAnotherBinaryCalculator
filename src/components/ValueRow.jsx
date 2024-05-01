import { useState } from 'react'
import BinaryInputBar from './BinaryInputBar'
import DecimalInput from './DecimalInput'

function ValueRow({ rowDecimalValue, rowName}) {
  const [decimalValue, setDecimalValue] = useState(rowDecimalValue)
  console.log(rowName)
  return (
    <>
    <div className='mainBar'>
      <BinaryInputBar totalDigits={8} setDecimalValue={setDecimalValue} decimalValue={decimalValue} rowName={rowName}/>
      <label>=</label>
      <DecimalInput setDecimalValue={setDecimalValue} decimalValue={decimalValue}/> 
    </div>
    </>
  )
}

export default ValueRow
