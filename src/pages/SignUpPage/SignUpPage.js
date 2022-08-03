import React from "react";
import styled from "styled-components";
import Logo from '../../assets/logo-ifuture.png'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import Back from '../../assets/back.svg'
import { Header, GoBack, Container, Title, Description, Form, Button, Block } from './styled'
import useForm from "../../hooks/useForm";
import { SignUp } from "../../services/services";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";




const SignUpPage = () => {

    const { form, onChange, cleanFields, handleClickShowPassword, handleClickShowConfirm } = useForm({
        name: "", email: "", cpf: "",
        password: "", confirm: "", showPassword: false, showPasswordConfirm: false
    })

    const navigate = useNavigate()

    const Send = (ev) => {
        ev.preventDefault()
        SignUp(form, navigate)
        cleanFields()
    }


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Container>
            <Header>
                <GoBack onClick={() => goToLoginPage(navigate)}><img src={Back} /></GoBack>
            </Header>
            <Title>
                <img src={Logo} />
            </Title>
            <Description>
                Cadastrar
            </Description>
            <Form >
                <Block>
                    <TextField
                        fullWidth
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        label="Nome"
                        placeholder="Nome e sobrenome"
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
                        label="E-mail"
                        size="large"
                        placeholder="email@email.com"
                        type='email'
                    />
                </Block>
                <Block>
                    <TextField
                        fullWidth
                        name="cpf"
                        value={form.cpf}
                        onChange={onChange}
                        required
                        label="CPF"
                        helperText="teste"
                        placeholder="000.000.000-00"
                        size="large"
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    />
                </Block>
                <Block>
                    <FormControl sx={{ width: '20.5rem' }} variant="outlined">
                        <InputLabel htmlFor="outlined-password">Senha</InputLabel>
                        <OutlinedInput
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            id="outlined-password"
                            type={form.showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={onChange}
                            endAdornment={
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {form.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            }
                        />
                    </FormControl>
                </Block>
                <Block>
                    <FormControl sx={{ width: '20.5rem' }} variant="outlined">
                        <InputLabel htmlFor="outlined-passwordconfirm">Confirmar</InputLabel>
                        <OutlinedInput                            
                            required
                            fullWidth
                            name="confirm"
                            label="Senha"
                            placeholder="Confirme a senha anterior"
                            id="outlined-passwordconfirm"
                            type={form.showPasswordConfirm ? 'text' : 'password'}
                            value={form.confirm}
                            onChange={onChange}
                            endAdornment={
                                <IconButton
                                    onClick={handleClickShowConfirm}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {form.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            }
                        />
                    </FormControl>
                </Block>
                <Button>Criar</Button>
            </Form>
        </Container>
    )
}

export default SignUpPage