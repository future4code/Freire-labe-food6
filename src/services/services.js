import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/url'
import { goToAddAdressPage } from '../routes/coordinator'


export const Login = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            if (!res.data.user.hasAddress) {
                goToAddAdressPage(navigate)
            }
        }).catch((err) => {
            console.log(err.response)
        })
}

export const SignUp = (body, navigate) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            goToAddAdressPage(navigate)
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
            localStorage.setItem("token", res.data.token)
        }).catch((err) => {
            console.log(err.response)
        })
}


export const GetRestaurante = () => {
    axios.get(`${BASE_URL}/restaurants`, {
          headers:{
            auth:localStorage.getItem("token")
          }
    })
   
        .then((res) => {
            console.log(res.data.restaurants);  
            
        })
        .catch((err) => {
            console.log(err.response);
        });
     
};




