// import React, { useState } from "react";
// import axios from "axios";
// import 'antd/dist/antd.css';
// import { AudioOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
// import { Input, Space, Tabs } from 'antd';
import *as S from "./Styled"
// import { color } from "@mui/system";
// import { grey } from "@mui/material/colors";
 import Footer from "../../../Components/Footer/Footer";
// import { ThemeProvider } from "styled-components";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from "../../../constants/theme";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {SearchOutlined} from '@ant-design/icons';


// const Home = () => {
//     const { Search } = Input;
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



// const suffix = (
//     <AudioOutlined
//         style={{
//             fontSize: 16,
//             color: '#1890ff',
//         }}
//     />
// );

// const { TabPane } = Tabs;

// const onChange = (key) => {
//     console.log(key);
// };
// const onSearch = (value) => console.log(value);


// export default function ColorTabs() {
//     const [value, setValue] = React.useState('one');

//     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//       setValue(newValue);
//     };


//     return (
//         <S.container>

// <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Item One" />
//         <Tab value="two" label="Item Two" />
//         <Tab value="three" label="Item Three" />
//       </Tabs>
//     </Box>

{/* <S.titulo> Ifuture </S.titulo>

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
                            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400" />
                            <span> Nome da Loja  </span>
                            <div>
                                <span> Entrega </span>
                                <span> Frete </span>
                            </div>


                        </S.restaurants> */}
{/* </TabPane> */ }



{/* <TabPane tab="Asiática" key="Asiática">
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
                             */}



{/* </S.restaurants> 
                    </TabPane> */}

{/* 
                </Tabs>
            </div> */}
//             <Footer />

//         </S.container>
//     )
// }

// export default Home


export default function ColorTabs() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <S.container>
            <S.titulo> Ifuture</S.titulo>
         <S.input placeholder="pesquise" />
       
          
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"

                    >
                        <Tab value="Hamburguer" label="Hamburguer"/>
                        <Tab value="Ásiatica" label="Ásiatica" />
                        <Tab value="Árabe" label="Árabe" />
                        <Tab value="Italiana" label="Italiana" />
                        <Tab value="Sorvetes" label="Sorvetes" />
                        <Tab value="Carnes" label="Carnes" />
                        <Tab value="Baiana" label="Baiana" />
                        <Tab value="Petiscos" label="Petiscos" />
                        <Tab value="Mexicana" label="Mexicana" />
                        

                    </Tabs>
                </Box>
              <S.restaurants>
                <S.img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                 
                <S.span> Nome do Restaurante </S.span>
                <div>
                    <span> Entrega </span>
                    <S.frete> Frete </S.frete>
                </div>
                </S.restaurants>
            <Footer/>

        </S.container>
    );
}
