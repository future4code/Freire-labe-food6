import { Form, Block, Button} from "./styled"
import React from "react"
import { AddAdress } from "../../services/services"
import useForm from "../../hooks/useForm"
import TextField from '@mui/material/TextField';


const Address = () => {

    const { form, onChange, cleanFields } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})

    const Send = (ev) => {
        ev.preventDefault()
        AddAdress(form)
        cleanFields()
    }

    return (
        <Form onSubmit={Send}>
                <Block>
                    <TextField
                    fullWidth
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        required                        
                        label="Logradouro"
                        size="large"
                        placeholder="Rua/Av."
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        required
                        label="Número"
                        placeholder="Número"                                                
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        label="Complemento"                        
                        placeholder="Apto./Bloco"                                                
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        required
                        label="Bairro"
                        placeholder="Bairro"                       
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        required
                        label="Cidade"
                        placeholder="Cidade"                        
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        required
                        label="Estado"
                        placeholder="Estado"                       
                    />
                </Block>
                
                <Button>Salvar</Button>
            </Form>
    )
}

export default Address