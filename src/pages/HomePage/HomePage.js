import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from "../../constants/theme";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { SearchOutlined } from '@ant-design/icons';
import *as S from "./styled";
import { GetRestaurante } from '../../services/services';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';


const HomePage = () => {
    const navigate = useNavigate()
    const [pesquisa, setPesquisa] = useState("");
    const [value, setValue] = useState('one');
    const [restaurant, setRestaurant] = useState(undefined)
    const [restaurantCategory,setRestaurantCategory]=useState("")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onChangePesquisa = (event) => {
        setPesquisa(event.target.value);
    };

     const GetRestaurante = () => {
        axios.get(`${BASE_URL}/restaurants`, {
              headers:{
                auth:localStorage.getItem("token")
              }
        })
       
            .then((res) => {
                setRestaurantCategory(res.data.restaurants);  
                
            })
            .catch((err) => {
                console.log(err.response);
            });
         
    };
    

    useEffect(() => {
        GetRestaurante()
        const productList = restaurant && restaurant.filter((product) => {
            if (product.category === 'Hamburguer') {
                return true
            } 
            return false 
        })
        setRestaurantCategory(productList)   
      },[]);
    
      const selectRestaurantType = (data) => {
          console.log(data)
          const productList = restaurant && restaurant.filter((product) => {
            if (product.category === data) {
                return true
            } 
            return false 
        })
        setRestaurantCategory(productList)    
      }
        if(restaurantCategory !== undefined){
            console.log('Categoria',restaurantCategory)
        }; 

        const renderCategory = restaurantCategory && restaurantCategory.map((data)=>{
            return(
    
                <div>
                    
                    <div>
                      <div>{data.name}</div>
                    </div>
                    <div>
                      <p>{data.deliveryTime} min</p>
                      <p>frete R${data.shipping},00</p>
                    </div>                
                </div>
            )
        })
    
            return (
                <S.container>
                    <S.titulo> <b> Ifuture </b></S.titulo>
                   
                     <S.input
                     
                        type="text"
                        id="txtBusca"
                        placeholder="Restaurante"
                        onChange={onChangePesquisa}
                    /> 
                  
        
        
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            aria-label="secondary tabs example"
        
                        >
        
        
                            <Tab value="Hamburguer" label="Hamburguer" onClick={() => selectRestaurantType('Hamburguer')} />
                            <Tab value="Ásiatica" label="Ásiatica" onClick={() => selectRestaurantType('Ásiatica')}/>
                            <Tab value="Árabe" label="Árabe" onClick={() => selectRestaurantType('Árabe')}/>
                            <Tab value="Italiana" label="Italiana" onClick={() => selectRestaurantType('Italiana')} />
                            <Tab value="Sorvetes" label="Sorvetes" onClick={() => selectRestaurantType('Sorvetes')} />
                            <Tab value="Carnes" label="Carnes" onClick={() => selectRestaurantType('Carnes')}/>
                            <Tab value="Baiana" label="Baiana" onClick={() => selectRestaurantType('Baiana')}/>
                            <Tab value="Petiscos" label="Petiscos" onClick={() => selectRestaurantType('Petisco')}/>
                            <Tab value="Mexicana" label="Mexicana" onClick={() => selectRestaurantType('Mexicana')}/>
                           
        
                        </Tabs>
                    </Box>
                            
                    <S.restaurants>
                        <S.img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400" />
        
                        <S.nomeRestaurante> Nome do Restaurante </S.nomeRestaurante>
        
                        <div>
                            <S.span> Entrega </S.span>
                        </div>
                        <div>
                            <S.frete> Frete </S.frete>
                        </div>
                        
                    </S.restaurants>
        
                    <Footer />
                </S.container>
        
        )
        
}

export default HomePage