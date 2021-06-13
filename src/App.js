
import { Layout } from 'antd';
import React from 'react';
import './App.css';
import { Card } from 'antd';
import SiderDemo from "./components/Sider1.js";

const { Header, Footer, Sider, Content} = Layout;
const App = () => {
  return (
    <div className="container">
      <Layout>
      <Sider>Sider<SiderDemo/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content
        <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </div>
    
  )
}
export default App;
