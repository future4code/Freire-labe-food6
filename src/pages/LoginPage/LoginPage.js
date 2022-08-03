import React from "react";
import Logo from '../../assets/logo-ifuture.png'
import { Container, Title, Description, Form, Button, Block, Sign } from './styled'
import useForm from '../../hooks/useForm'
import { Login } from "../../services/services";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom'




const LoginPage = () => {

    const navigate = useNavigate()

    const { form, onChange, cleanFields, handleClickShowPassword } = useForm({ email: "", password: "", showPassword: false })

    const Send = (ev) => {
        ev.preventDefault()
        Login(form, navigate)
        cleanFields()
    }    

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <Container>
            <Title>
                <img src={Logo} />
            </Title>
            <Description>
                Entrar
            </Description>
            <Form onSubmit={Send}>
                <Block>
                    <TextField
                        fullWidth
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        label="E-mail"
                        placeholder="email@email.com"
                        type='email'
                        variant="outlined"
                    />
                </Block>
                <Block>
                    <FormControl sx={{ width: '20.5rem' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            id="outlined-adornment-password"
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
                <Button>Entrar</Button>
            </Form>
            <Sign>
                <p>Não possui cadastro?</p><a href="/signup">Clique aqui.</a>
            </Sign>
        </Container>
    )
}

export default LoginPage