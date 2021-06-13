import { Layout, Menu, Breadcrumb, Checkbox } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import "./sider.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };






  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '0vh' }}>
        <Sider width={220}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Sort by
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Sort by">
              <Menu.Item key="3"><Checkbox onChange={onChange}></Checkbox> Oxygen</Menu.Item>
              <Menu.Item key="3"><Checkbox onChange={onChange}></Checkbox> Medicine</Menu.Item>
              <Menu.Item key="3"><Checkbox onChange={onChange}></Checkbox> Money</Menu.Item>
              <Menu.Item key="3"><Checkbox onChange={onChange}></Checkbox> Hospital beds</Menu.Item>
              <Menu.Item key="3"><Checkbox onChange={onChange}></Checkbox> Plasma donors</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>


      </Layout>
    );
  }
}

//ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo;