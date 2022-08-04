import styled from "styled-components";

export const container = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-direction: column;
align-items: center;
h1:first-child{
    border-bottom: 1px solid #CDC8B1;
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
border-radius: 12px;
 border: 2px solid  #CDC8B1;
 margin-top: 30px;

`

export const img = styled.img`
 width: 346px;
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
margin-top: 10px;
border: 1px solid #CDC8B1;
border-radius: 5px;

`
export const nomeRestaurante = styled.span `
text-align: left;
color: red;
margin-left: 15px;
margin-top: 20px;

`
export const span = styled.span `
text-align: left;
margin-left: 15px;
margin-top: 10px;

`
export const frete = styled.div `
text-align:right;
margin-right: 20px;


`
