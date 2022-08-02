import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const Login = (body) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
    }).catch((err) => {
        console.log(err.response)
    })
}

export const SignUp = (body) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
    }).catch((err) => {
        console.log(err.response)
    })    
}

export const AddAdress = (body) => {
    axios.put(`${BASE_URL}/address`, body, {
        headers: {
         auth: localStorage.getItem("token")   
        }        
    })
    .then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}
 