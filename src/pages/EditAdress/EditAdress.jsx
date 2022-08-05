import React from 'react'
import { EditAdressContainer } from './style'
import TextField from '@mui/material/TextField';
import { Form, Block, Button } from "./style"
import {Header} from './style'
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useState, useEffect } from 'react';
import { goToProfilePage } from '../../routes/coordinator';
import { GoBack } from './style';
import Back from '../../assets/back.svg'
import { useNavigate } from 'react-router-dom';


function EditAdress() {

    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})

        const Send = (ev) => {
            ev.preventDefault()
            cleanFields()
            editAdress()
        }

        const [updateAdress, setUpdateAdress] = useState({})

        const editAdress = () => {
            axios.put(`${BASE_URL}/address`, form, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
        .then((res) =>{
            console.log(res)
            setUpdateAdress(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const [adress, setAdress] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res)
            setAdress(res.data.address)
        })
        .catch((err) => {
            console.loge(err)
        })
    },[])
        
    

  return (
    <EditAdressContainer>
        <Header>
        <GoBack onClick={() => goToProfilePage(navigate)}><img src={Back} /></GoBack>
        </Header>
        <Form onSubmit={Send}>
            <Block>
        <TextField
                fullWidth
                name="street"
                value={form.street}
                onChange={onChange}
                required                        
                label={adress.street}
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
                        label={adress.number}
                        placeholder="Número"                                                
                    />
                </Block>
                <Block>
                    <TextField
                    fullWidth
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        label={adress.complement}                       
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
                        label={adress.neighbourhood}
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
                        label={adress.city}
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
                        label={adress.state}
                        placeholder="Estado"                       
                    />
                </Block>
                <Button>Salvar</Button>
        </Form>
    </EditAdressContainer>
  )
}

export default EditAdress