import 'antd/dist/antd.css';
import { UserOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import *as S from "./styled";
import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import theme from '../../constants/theme';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Box from '@mui/material/Box';

const Footer = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
  <Box sx={{ width: '100%' }}>
        <Tabs
        value={value}
        onChange={handleChange}
          
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"

        >  
        <S.footer>
            <HomeOutlined 
                style={{
                    width: "40px", fontSize: "24px"
                }}

            />
            <ShoppingCartOutlined
                style={{
                    width: "40px", fontSize: "24px"
                }}

            />
            <UserOutlined
                style={{
                    width: "40px", fontSize: "24px"
                }}
            />
        </S.footer>
 </Tabs>
 </Box>
    )
}

export default Footer