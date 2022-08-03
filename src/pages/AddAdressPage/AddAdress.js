import React from "react";
import Back from '../../assets/back.svg'
import { Header, Before, Container, Description } from './styled'
import Address from '../../components/Form/address'
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"


const AddAdressPage = () => {
    const navigate = useNavigate()
    
    return (
        <Container>
            <Header>
                <Before onClick={() => goBack(navigate)}><img src={Back} /></Before>
            </Header>            
            <Description>
                Meu endereço
            </Description>
           <Address/>
        </Container>
    )
}

export default AddAdressPage