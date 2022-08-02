import 'antd/dist/antd.css';
import { AudioOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import *as S from "./Styled"



const Footer = () => {

    return (

        <S.footer>
            <HomeOutlined
                style={{
                    // width: "40px", fontSize: "24px", color: "#838B83", color: selecionado === true ? red:gray  
                }}

            />
            <ShoppingCartOutlined
                style={{
                    width: "40px", fontSize: "24px", color: "#838B83"
                }}

            />
            <UserOutlined
                style={{
                    width: "40px", fontSize: "24px", color: "#838B83"
                }}
            />
        </S.footer>

    )
}

export default Footer
