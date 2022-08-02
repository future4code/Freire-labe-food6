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
width: 304px;
display: flex;
flex-direction: column;
border-radius: 20px;
border: 2px solid #838B83;
justify-content: center;
align-items: center;
img{
    width: 300px;
    height: 150px;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

