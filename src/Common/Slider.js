import React, { useState }  from 'react';
import {  Layout, Menu } from 'antd';

import {
    // DesktopOutlined,
    // FileOutlined,
    // PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
const items = [
    // getItem('Option 1', '1', <PieChartOutlined />),
    // getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Entry', 'sub1', <UserOutlined />, [
      getItem('Bill/Invoice', '3'),
      getItem('Purchase', '4'),
      getItem('Receipt', '5'),
      getItem('Payment', '5'),
      getItem('Contra', '5'),
    ]),
    getItem('Report', 'sub2', <TeamOutlined />, [
      getItem('Ledger Report', '6'), 
      getItem('Cash Book', '8'),
      getItem('Outstanding', '8'),
      getItem('Sales Register', '8'),
      getItem('Purchase Register', '8'),
    ]),
    getItem('Master', 'sub3', <TeamOutlined />, [
        getItem('Ledger Entry', '6'),
        getItem('Item Entry', '8')
    ]),
    getItem('Utility', 'sub4', <TeamOutlined />, 
    [getItem('Calculater', '6'), 
    getItem('Exit', '8')]),
    // getItem('Files', '9', <FileOutlined />),
  ];

const Slider = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>
  )
}

export default Slider