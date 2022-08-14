import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout } from 'antd';

import Footer from './Footers';
import Sliders from './Slider';
import Headers from './Headers';


const { Content } = Layout;

const App = (props) => {

  return (
  <>
  
      <Headers/>
    <Layout
      style={{
          minHeight: '100vh',
        }}
    >
       
      <Sliders/>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
        {props.children}
         
        </Content>
        <Footer/>
      </Layout>
    </Layout>
     </>
  );
};

export default App;