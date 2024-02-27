import { Paper, Input } from "@mui/material"
import "./components.css"

const DecimalInput = ({setDecimalValue, decimalValue}) => {
    
    const handleChange = (event) => {
        
        // setDecimalValue(event.target.value)
    }

    return (
        <Paper>
            <Input
                inputProps={{
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
            />
        </Paper>
    )
}

export default DecimalInput