import Footer from '../../components/Footer/Footer';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from "../../constants/theme";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {SearchOutlined} from '@ant-design/icons';
import *as S from "./styled";

  const HomePage = () => {
  
    
    const ColorTabs =()=> {
        const [value, setValue] = React.useState('one');
    
        const handleChange = (event, newValue) => {
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
}
    export default HomePage