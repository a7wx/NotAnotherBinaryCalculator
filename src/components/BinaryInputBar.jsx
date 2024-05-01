import { Paper } from "@mui/material"
import BinaryInput from "./BinaryInput"
import './components.css'
import { useRef } from "react"



const BinaryInputBar = ({ totalDigits, setDecimalValue, decimalValue, rowName }) => {
    const focusNextDigit = (index) => {
        if (index === 0) {
            //Swap to beginning of binary input
            document.getElementById(rowName + String(totalDigits - 1)).focus();
        } else {
            document.getElementById(rowName + String(((index - 1) % (totalDigits)))).focus();
        }
    };

    const digits = [];
    for (let i = totalDigits - 1; i >= 0; i--) {
        digits.push(<BinaryInput key={i} index={i} totalDigits={totalDigits} focusNextDigit={focusNextDigit} setDecimalValue={setDecimalValue} decimalValue={decimalValue} rowName={rowName}/>);
    }

    return (
        <>
            <Paper className="samePaper">
                <div className="barDiv">
                    {digits}
                </div>
            </Paper>
        </>
    )
}

export default BinaryInputBar