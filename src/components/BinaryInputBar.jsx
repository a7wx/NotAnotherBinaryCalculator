import { Paper } from "@mui/material"
import BinaryInput from "./BinaryInput"
import './components.css'



const BinaryInputBar = ({ totalDigits }) => {
    const focusNextDigit = (index) => {
        console.log(index, totalDigits);
        const nextDigit = document.getElementById(String((index + 1) % (totalDigits)) );
        if (nextDigit) {
            nextDigit.focus();
        }
    };

    const digits = [];
    for (let i = 0; i < totalDigits; i++) {
        digits.push(<BinaryInput key={i} index={i} totalDigits={totalDigits} focusNextDigit={focusNextDigit} />);
    }

    return (
        <>
            <Paper className="samePaper">
                <div className="barDiv">
                    {digits}
                </div>
                {/* <div className="barDiv">
                    {digits}
                </div> */}
            </Paper>
        </>
    )
}

export default BinaryInputBar