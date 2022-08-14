import React from 'react';
import "../utils/header.css"

import {  Layout } from 'antd';
const { Header } = Layout;

const Headers = () => {
  return (
    <Header
          className="site-layout-background"
          style={{
            padding: 0,
            
          }}>
         <div className="logo"
         style={{
          color: 'white',
          fontSize: '20px',
          marginLeft: '60px',
          fontWeight: 'bold',
         }}
         
         >
            LOGO
        </div>
          </Header>
  )
}

export default Headers