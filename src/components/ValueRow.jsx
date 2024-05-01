import { useState } from 'react'
import BinaryInputBar from './BinaryInputBar'
import DecimalInput from './DecimalInput'

function ValueRow(rowDecimalValue) {
  const [decimalValue, setDecimalValue] = useState(rowDecimalValue.rowDecimalValue)

  return (
    <>
    <div className='mainBar'>
      <BinaryInputBar totalDigits={8} setDecimalValue={setDecimalValue} decimalValue={decimalValue}/>
      <label>=</label>
      <DecimalInput setDecimalValue={setDecimalValue} decimalValue={decimalValue}/> 
    </div>
    </>
  )
}

export default ValueRow
