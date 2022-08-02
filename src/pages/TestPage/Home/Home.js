import React, { useState } from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import { AudioOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Input, Space, Tabs } from 'antd';
import *as S from "./Styled"
import { color } from "@mui/system";
import { grey } from "@mui/material/colors";
import  Footer  from "../../../Components/Footer/Footer";

const Home = () => {
    const { Search } = Input;
    // const [food, setFood] = useState("");


    // const Restaurante = ()=> {
    //     const token = localStorage.getItem("token")
    //     const auth = {headers:{Authorization:token}}

    //     axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/:restaurantId`, auth)
    //     .then((response) => {
    //         setFood("Deu certo: ", response.data);
    //         localStorage.setItem("token", response.data.token);

    //       })
    //       .catch((error) => {
    //         setFood("Deu errado: ", error.response);
    //       });


    //   };

    //   console.log(Restaurante());



    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };
    const onSearch = (value) => console.log(value);
    return (
        <S.container>
            <S.titulo> Ifuture </S.titulo>

            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{

                    }}
                    size="large"

                />
            </Space>
            <div>
                <Tabs defaultActiveKey="1" onChange={onChange}>

                    <TabPane tab="Árabe" key="Árabe">
                    <S.restaurants>
                            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"/> 
                            <span> Nome da Loja  </span>
                            <div> 
                                <span> Entrega </span>
                                <span> Frete </span>
                            </div>
                            

                        </S.restaurants> 
                    </TabPane>

                    <TabPane tab="Asiática" key="Asiática">
                        Asiática
                    </TabPane>

                    <TabPane tab="Hamburguer" key="Hamburguer">
                        Hamburguer
                    </TabPane>

                    <TabPane tab="Italiana" key="Italiana">
                        Italiana
                    </TabPane>

                    <TabPane tab="Sorvetes" key="Sorvetes">
                        Sorvetes
                    </TabPane>

                    <TabPane tab="Carnes" key="Carnes">
                        Carnes
                    </TabPane>

                    <TabPane tab="Baiana" key="Baiana">
                        Baiana
                    </TabPane>

                    <TabPane tab="Petiscos" key="Petiscos">
                        Petiscos
                    </TabPane>

                    <TabPane tab="Mexicana" key="Mexicana">
                         <S.restaurants>
                            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"/> 
                            <span> Nome da Loja  </span>
                            <div> 
                                <span> Entrega </span>
                                <span> Frete </span>
                            </div>
                            

                        </S.restaurants> 
                    </TabPane>


                </Tabs>
            </div>
               <Footer/>
            
        </S.container>
    )
}

export default Home