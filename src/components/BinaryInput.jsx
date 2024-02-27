import { TextField, Input } from "@mui/material"
import React, { useState, useRef } from "react";

const BinaryInput = ({ index, totalDigits, focusNextDigit }) => {
    const [value, setValue] = useState('0');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue === "0" || inputValue === "1") {
            setValue(inputValue);
            if (focusNextDigit && (index < totalDigits - 1)) {
                focusNextDigit(index);
            }
        } else if (inputValue === "") {
            setValue((value === "1") ? "0" : "1");
            if (focusNextDigit && (index < totalDigits - 1)) {
                focusNextDigit(index);
            }
        };
    }

    return (
        <Input
            ref={inputRef}
            id={String(index)}
            inputProps={{
                maxLength: 1,
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
    )
}

export default BinaryInput