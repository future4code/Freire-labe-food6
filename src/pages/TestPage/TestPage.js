import React from "react"
import { Button } from "@mui/material"
import Header from "../../components/Header/Header"

const TestPage = () => {
    return (
        <div>
            <Header/>
            <p>
                Teste Page
            </p>
            <Button 
            color="primary"
            variant="contained">
                Teste Button
            </Button>
        </div>
    )
}

export default TestPage