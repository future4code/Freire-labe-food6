import React, { useEffect } from "react";
import axios from "axios"
import { ProfileScreenContainer } from "./style";
import CardContent from "@mui/material/CardContent";
import { StyledCard } from "./style";
import { StyledTypography } from "./style";
import { ProfileContainer } from "./style";
import { OrderHistory } from "./style";
import Edit from "../../assets/Edit.png"
import { StyledTypography2 } from "./style";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";

const ProfilePage = () => {
    const [profile, setProfile] = useState({})

        useEffect(() => {
            axios
            .get(`${BASE_URL}/profile`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) =>{
                console.log(res)
                setProfile(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
        },[])

    return (
        <ProfileScreenContainer>
            <ProfileContainer>
                <div className="Edit">
                <h2>{profile.name}</h2>
                <button><img src={Edit}/></button> 
                </div>
                <h2>{profile.email}</h2>
                <h2>{profile.cpf}</h2>
            </ProfileContainer>
    <StyledCard sx={{ minWidth: 390 }}>
        <CardContent>
            <StyledTypography2 sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                Endereço cadastrado <button><img src={Edit}/></button>
            </StyledTypography2>
            <StyledTypography sx={{ fontSize: 16 }} component="div">
                {profile.address    } 
            </StyledTypography>
        </CardContent>
    </StyledCard>
            <OrderHistory>
                <p>Histórico de pedidos</p>
                <div class="Path-Copy"></div>
            </OrderHistory>
        </ProfileScreenContainer>
    )
}

export default ProfilePage