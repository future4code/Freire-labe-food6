import { createTheme } from '@mui/material'
import {primaryColor, neutralColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },    
    secondary: {
        main: "#19857b"       
    }
  }
})

export default theme 