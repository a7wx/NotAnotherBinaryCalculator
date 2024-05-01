import { Paper, Input } from "@mui/material"
import "./components.css"
import { useState } from "react"

const DecimalInput = ({ setDecimalValue, decimalValue }) => {
    const [localChange, setLocalChange] = useState(false);

    const handleChange = (event) => {
        if (localChange) {
            let stringVal = event.target.value.replace(/\D/g, '').replace(/^0+/, '');
            if (stringVal === '') stringVal = 0;
            const decVal = parseInt(stringVal, 10);
            decVal > 255 ? setDecimalValue('255') : decVal < 0 ? setDecimalValue('0') : setDecimalValue(stringVal);
        }
    }

    return (
        <Paper>
            <Input
                inputProps={{
                    step: 1,
                    min: 0,
                    style: {
                        textAlign: "center",
                        fontSize: '20px',
                    }
                }}
                sx={{
                    width: "100px",
                    background: "#f4f4f4",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
                input={{
                    fontSize: '30px' // Adjust the font size as needed
                }}
                value={decimalValue}
                onChange={handleChange}
                onFocus={() => setLocalChange(true)}
                onBlur={() => setLocalChange(false)}
            />
        </Paper>
    )
}

export default DecimalInput