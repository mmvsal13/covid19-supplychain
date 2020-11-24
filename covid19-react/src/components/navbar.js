import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { ClockCircleOutlined, MenuOutlined, TransactionOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Navbar() {
  const [current, setcurrent] = useState('mail');
  
  function handleclick(e) {
    console.log('click', e);
    setcurrent({current: e.key});
  };

  return (
    <Menu onClick={handleclick} selectedKeys={[current]} mode="horizontal" theme="dark">
      <SubMenu key="SubMenu" icon={<MenuOutlined />} title="">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="transaction" icon={<TransactionOutlined />}>
        Transactions
      </Menu.Item>
      <Menu.Item key="clock" icon={<ClockCircleOutlined />}>
        History
      </Menu.Item>
    </Menu>
  );
}


export default Navbar;
