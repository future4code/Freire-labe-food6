import React from "react"
import { useLocation } from "react-router-dom"
import { HeaderContainer } from "./styled"


const Header = () => {
    const location = useLocation()
    console.log(location);
    
    return(
        <HeaderContainer>
            <div id="left">

            </div>
            
            <div id="center">
                {location.pathname === "/" ? <p>Ifuture</p> : null}
                {location.pathname === "/test" ? <p>Teste</p> : null}
            </div>
            <div id="right">

            </div>
        </HeaderContainer>
    )
}

export default Header