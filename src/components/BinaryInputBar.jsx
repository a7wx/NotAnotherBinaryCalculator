import { Paper } from "@mui/material"
import BinaryInput from "./BinaryInput"
import './components.css'



const BinaryInputBar = ({ totalDigits, setDecimalValue, decimalValue }) => {
    const focusNextDigit = (index) => {
        console.log(index, totalDigits);
        if (index === 0){
            //Swap to beginning of binary input
            document.getElementById(String(totalDigits - 1)).focus();
        } else {
            document.getElementById(String(((index - 1) % (totalDigits)))).focus();
        }
    };

    const digits = [];
    for (let i = totalDigits - 1; i >= 0; i--) {
        digits.push(<BinaryInput key={i} index={i} totalDigits={totalDigits} focusNextDigit={focusNextDigit} setDecimalValue={setDecimalValue} decimalValue={decimalValue} />);
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