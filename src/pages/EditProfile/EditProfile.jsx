import React from "react";
import axios from "axios";
import { EditProfileScreenContainer } from "./style";
import {Header, Block, Button, GoBack, Form } from './style'
import { TextField } from "@mui/material";
import InputMask from "react-input-mask"
import { goToProfilePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Back from '../../assets/back.svg'
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/url";
import { useState, useEffect } from "react";

const EditProfile = () => {
    const navigate = useNavigate()

    const [updateProfile, setUpdateProfile] = useState({})

    const { form, onChange, cleanFields } = useForm({
        name: "", email: "", cpf: "",})

        const Send = (ev) => {
            ev.preventDefault()
            cleanFields()
            editProfile()
        }
        
        const editProfile = () => {
            axios.put(`${BASE_URL}/profile`, form, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
        .then((res) =>{
            console.log(res)
            setUpdateProfile(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const currentName = JSON.parse(localStorage.getItem("profiles"))
    console.log(currentName)
        

    return (
        <EditProfileScreenContainer>
            <Header>
                <GoBack onClick={() => goToProfilePage(navigate)}><img src={Back} /></GoBack>
            </Header>
        <Form onSubmit={Send}>
            <Block>
                    <TextField
                        fullWidth
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        label={currentName.name}
                        placeholder="Nome"
                        size="large"
                    />
            </Block>
            <Block>
                    <TextField
                        fullWidth
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        label={currentName.email}
                        size="large"
                        placeholder="E-mail"
                        type='email'
                    />
            </Block>
            <Block>
                    <InputMask
                        mask="999.999.999-99"
                        value={form.cpf}
                        disabled={false}
                        maskChar=" "
                        onChange={onChange}
                    >
                        {() => <TextField
                            fullWidth
                            required
                            value={form.cpf}
                            onChange={onChange}
                            placeholder="000.000.000-00"
                            label="CPF"
                            name="cpf" />}
                    </InputMask>
                </Block>
                <Button>Criar</Button>
            </Form>
        </EditProfileScreenContainer>
    )
}

export default EditProfile