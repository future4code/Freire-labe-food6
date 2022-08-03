import styled from "styled-components";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const ProfileScreenContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const StyledCard = styled(Card)`
    /* width: 100vw; */
    height: 4.75rem;
    background-color: #eeeeee !important;
`

export const StyledTypography = styled(Typography)`
    color: black;  
    
    button{
        border: none;
        cursor: pointer;
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    h2{
        font-size: 16px;
        margin: 0.125rem 1rem 0.5rem
    }

    .Edit{
        /* border: 1px solid green; */
        display: flex;
        justify-content: space-between;

        h2{
            margin-top: 10px;
        }

    button{
        border: none;
        background-color: transparent;
        margin: 0.5rem 1rem;
    }
    }

`

export const OrderHistory = styled.div`
    p{
        font-size: 1rem;
        margin: 1rem 1rem 0.5rem;
    }
    .Path-Copy {
        width: 22.5rem;
        height: 0.063rem;
        margin: 0.5rem 1rem 1rem;
        border: solid 1px #000;
}
`

export const StyledTypography2 = styled(Typography)`
        display: flex;
        justify-content: space-between;
    button{
        border: none;
        cursor: pointer;
    }
`

