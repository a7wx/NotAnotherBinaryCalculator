import { Typography, Input } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

const BinaryInput = ({ index, focusNextDigit, setDecimalValue, decimalValue, rowName }) => {
    const [value, setValue] = useState('0');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const binaryString = decimalToBinary(decimalValue)

        if(binaryString[(index - 7) * -1] != value){
            setValue(binaryString[(index - 7) * -1])
        }
    }), [decimalValue];

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '0' || event.key === 'Backspace') {
                if (value === '1') {
                    setDecimalValue(parseInt(decimalValue, 10) - 2 ** index);
                    setValue('0');
                }
                focusNextDigit(index);
            } else if (event.key === '1') {
                if (value === '0') {
                    setDecimalValue(parseInt(decimalValue, 10) + 2 ** index);
                    setValue('1');
                }
                focusNextDigit(index);
            }
            // else if (event.key === 'Space') {
            //     focusNextDigit(index)
            // } else {
            // }
        };

        if (isFocused) {
            window.addEventListener('keydown', handleKeyPress);
        } else {
            window.removeEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isFocused]);

    const decimalToBinary = (decimal) => {
        const intValue = parseInt(decimal, 10);
        return intValue.toString(2).padStart(8, '0');
    }

    return (
        <div className="inputGroup">
            <Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                ref={inputRef}
                id={rowName + String(index)}
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
                readOnly={true} // Disable typing directly into the input
            />
            <Typography variant="caption" sx={{
                margin: 'auto'
            }}>
                {2 ** index}
            </Typography>
        </div>
    );
};

export default BinaryInput;
