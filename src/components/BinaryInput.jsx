import { Typography, Input } from "@mui/material"
import React, { useState, useRef } from "react";

const BinaryInput = ({ index, totalDigits, focusNextDigit, setDecimalValue, decimalValue }) => {
    const [value, setValue] = useState('0');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        const inputValue = event.target.value;

        if (inputValue[1] === "0") {
            if (value !== "0") {
                setDecimalValue(decimalValue - 2 ** index)
            }
            setValue("0")
            focusNextDigit(index);
        } else if (inputValue[1] === "1") {
            if (value !== "1") {
                setDecimalValue(decimalValue + 2 ** index)
            }
            setValue("1")
            focusNextDigit(index);
        } else if (inputValue === "") {
            if (value === "1") {
                setValue("0")
                setDecimalValue(decimalValue - 2 ** index)
            } else {
                setValue("1")
                setDecimalValue(decimalValue + 2 ** index)
            }
            focusNextDigit(index)
        }
    }

    return (
        <div className="inputGroup">
            <Input
                ref={inputRef}
                id={String(index)}
                inputProps={{
                    style: {
                        textAlign: "center",
                        fontSize: '20px',
                    }
                }}
                sx={{
                    width: "30px",
                    background: "#f4f4f4",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
                input={{
                    fontSize: '30px' // Adjust the font size as needed
                }}
                value={value}
                onChange={handleChange}
            />
            <Typography variant="caption" sx={{
                margin: 'auto'
            }}>
                {2 ** index}
            </Typography>

        </div>
    )
}

export default BinaryInput