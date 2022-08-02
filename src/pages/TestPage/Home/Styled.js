import styled from "styled-components";

export const container = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-direction: column;
align-items: center;
h1:first-child{
    border-bottom: 1px solid gray;
    width: 100%;
}
`

export const titulo = styled.h1`
text-align: center;
font-size: 1rem;
margin-top: 16px;

`
export const restaurants = styled.div`
width: 350px;
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
margin-left: 15px;
border-radius: 10px;
 border: 2px solid #838B83;

`

export const img = styled.img`
 width: 350px;
 border-radius: 10px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
   

`

export const input = styled.input`

margin-bottom: 10px;
width: 300px;
height: 50px;

`
export const span = styled.span `
text-align: left;

`
export const frete = styled.span `
text-align: right;

`