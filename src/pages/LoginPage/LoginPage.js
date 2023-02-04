import React, { useState } from "react";
import Logo from '../../assets/logo-ifuture.png'
import { Container, Title, Description, Button,Form, Block, Sign, Main, P, DivPassword, InputMaterial } from './styled'
import useForm from '../../hooks/useForm'
import { Login } from "../../services/services";
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import {BASE_URL} from "../../constants/url"

const LoginPage = () => {

     const navigate = useNavigate()

     const {email, setEmail}= useState("")
     const {password, setPassword}= useState("")
     const {showPassword, setShowPassword}= useState(false)
     const {errMail, setErrMail}= useState("")
     const {errPassword, setErrPassword} = useState("")
     const {checkErrMail, setCheckErrMail}= useState(false)
     const {checkErrPassword, setCheckErrPassword}= useState(false)

     const handleClickShowPassword =()=>{
             setShowPassword(!showPassword)
     }

     
     const onChangeHandler = event => {
        setEmail(event.target.value);
     };


     const onSubmitLogin = (event)=>{
        event.preventDefault()

        const userLogin = {
            email,
            password
        }
        loginApi(userLogin)
     }
        
 
     const loginApi = async (body)=>{
        await axios.post (`${BASE_URL}/login`)
        .then((res)=>{
            console.log(res.data);
            setEmail('')
            setPassword('')
            setErrMail('')
            setErrPassword('')
            setCheckErrMail(false)
            setCheckErrPassword(false)
        }) 

        .catch((err)=>{
            if (err.response.data.message.inclues("senha incorreta")) {
                setErrPassword(err.response.data.message)
                setCheckErrPassword('true')
            } else {
                setErrMail(err.response.data.message)
                setCheckErrMail('true')
            }
            // console.log(err.response);
        })
     }


    return (
        <Main>

            <P> Entrar </P>

            <Form onSubmit={onSubmitLogin}>
            <InputMaterial
                error={checkErrMail}
                helperText={checkErrMail ? errMail:""}
                id="outlined-basic" 
                label="email"
                type="email"
                variant="outlined"
                placeholder={"email@email.com"}
                value={email}
                onChange={onChangeHandler}
            />
            <DivPassword> 
            <InputMaterial
                error={checkErrPassword}
                helperText={checkErrPassword ? errPassword:""}
                id="outlined-basic"
                label="password"
                type={showPassword? 'password' : 'text'}
                variant="outlined"
                placeholder={" Mínimo 6 caracteres "}
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                inputProps={{minLength:6,title:"a senha deve conter no mínimo 6 caracteres"}}
             />
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </DivPassword>

            <Button type='submit'>Entrar</Button>
            </Form>
</Main>
    )
}

export default LoginPage