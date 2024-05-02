import { useEffect, useState } from 'react'
import BinaryInputBar from './BinaryInputBar'
import DecimalInput from './DecimalInput'

function ValueRow({ rowDecimalValue, rowName, updateDecimalValue}) {
  const [decimalValue, setDecimalValue] = useState(rowDecimalValue)

  useEffect(() => {
    updateDecimalValue(rowName, decimalValue)
  }, [decimalValue])

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
