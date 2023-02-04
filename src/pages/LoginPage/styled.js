import styled from 'styled-components'
import { Input } from '@mui/material';


export const InputMaterial = styled(Input)`

`

export const Main = styled.div`
 padding: 10px;
height: 100vh;
display: flex;  
width: 100%;
flex-direction: column;
align-items: center;
p{
    font-size: 2rem;
}

margin-top: 3%;
`

// export const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;


export const P= styled.p`
text-align:center;
align-items: center;
`

// export const Description = styled.div`
// size: 1rem;
// letter-spacing: -0.39px;
// margin: 1.75rem 0px 1.25rem 0px ;
// `

export const Form = styled.form`
display: flex;
flex-direction: column;
height: 40%;
justify-content: space-evenly;
`

export const Button = styled.button`
color:#000;
width: 100%;
background: red;
height: 20%;
`


export const Block = styled.div`
margin-bottom: 1rem;
width: 20.5rem;
`

export const Sign = styled.div`
display: flex;
align-items: center;
margin-top: 1.75rem;
`

export const DivPassword = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`