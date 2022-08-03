import React from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import { AudioOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Input, Space, Tabs } from 'antd';
import *as S from "./styled"
import Header from "../../components/Header/Header";

const HomePage = () => {
    const { Search } = Input;

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
        <div>
            
            <Header/>

            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
            </Space>
            <div>
                <Tabs defaultActiveKey="1" onChange={onChange}>

                    <TabPane tab="Árabe" key="Árabe">
                             Árabe
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
                    Mexicana
                    </TabPane>


                </Tabs>
            </div>

            <footer> <HomeOutlined /> <ShoppingCartOutlined /> <UserOutlined /></footer>
        </div>
    )
}

export default HomePage