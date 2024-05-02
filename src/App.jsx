import { useState, useEffect } from 'react'
import './App.css'
import ValueRow from './components/ValueRow'
import { Typography, Select, MenuItem, Paper } from '@mui/material'

function App() {
  const [decimalValues, setDecimalValues] = useState([0, 0])
  const [operation, setOperation] = useState('addition')
  const [decimalCombination, setDecimalCombination] = useState(0)
  const [binaryCombination, setBinaryCombination] = useState(decimalCombination.toString(2))
  const rowNames = ["1", "2"]

  useEffect(() => {
    const calculateDecimalSum = () => {
      return decimalValues.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
    }
    const calculateDecimalDifference = () => {
      return parseInt(decimalValues[0] - parseInt(decimalValues[1]))
      // return decimalValues.reduce((acc, curr) => parseInt(acc) - parseInt(curr), parseInt(decimalValues[0]))
    }

    if (operation === 'addition') setDecimalCombination(calculateDecimalSum())
    if (operation === 'subtraction') setDecimalCombination(calculateDecimalDifference())
  }, [decimalValues, operation])

  useEffect(() => {
    const binarySum = decimalCombination.toString(2);
    setBinaryCombination(binarySum);
  }, [decimalCombination]);

  const handleOperationChange = (event) => {
    setOperation(event.target.value)
  }

  const updateDecimalValue = (rowName, value) => {
    const updatedValues = [...decimalValues];
    updatedValues[rowName - 1] = value;
    setDecimalValues(updatedValues);
  };

  // const decimalSum = calculateDecimalSum()
  // const binarySum = decimalSum.toString(2)

  return (
    <>
      <h1>Not Another Binary Calculator</h1>
      <ValueRow rowDecimalValue={decimalValues[0]} rowName={rowNames[0]} updateDecimalValue={updateDecimalValue} />
      {operation !== 'conversion' && (
        <ValueRow rowDecimalValue={decimalValues[1]} rowName={rowNames[1]} updateDecimalValue={updateDecimalValue} />
      )}
      <div className="mainBar">
        <Paper className="hugPaper">
          <Select value={operation} onChange={handleOperationChange}>
            <MenuItem value="addition">Addition</MenuItem>
            <MenuItem value="subtraction">Subtraction</MenuItem>
            <MenuItem value="conversion">Conversion</MenuItem>
          </Select>
          {operation !== 'conversion' && (
            <div className="resultRow">
              <div className="resultStack">
                <Typography className="result" variant="body1">Binary Value:</Typography>
                <Typography className="result" variant="body1">Decimal Value:</Typography>
              </div>
              <div className="resultStack">
                <Typography className="resultVal" variant="body1">{binaryCombination}</Typography>
                <Typography className="resultVal" variant="body1">{decimalCombination}</Typography>
              </div>
            </div>
          )}
        </Paper>
      </div>
    </>
  )
}

export default App
