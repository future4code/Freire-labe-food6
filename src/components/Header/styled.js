import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-areas: 'left center right';
    text-align: center;
    & > div{
        grid-area: center;
    }
`