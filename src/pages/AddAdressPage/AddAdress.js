import React from "react";
import Back from '../../assets/back.svg'
import { Header, GoBack, Container, Description } from './styled'
import Address from '../../components/Form/address'

const AddAdressPage = () => {
    return (
        <Container>
            <Header>
                <GoBack><img src={Back} /></GoBack>
            </Header>            
            <Description>
                Meu endereço
            </Description>
           <Address/>
        </Container>
    )
}

export default AddAdressPage