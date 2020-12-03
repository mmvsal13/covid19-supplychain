import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { ClockCircleOutlined, MenuOutlined, TransactionOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Navbar(props) {
    const [current, setcurrent] = useState('mail');

    function handleclick(e) {
        console.log('click', e);
        setcurrent({ current: e.key });
    }
    {/*NavBar different for diff pages
    props.page = "man" -> return navigation bar for manufacturer page
    if you do not set props.page when you vall NavBar then you will get the default home
    */}

    if (props.page == "man") {
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
    } else {
        return (
            <Menu onClick={handleclick} selectedKeys={[current]} mode="horizontal" theme="dark">
                <SubMenu key="SubMenu" icon={<MenuOutlined />} title="">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Other Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Other Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Other Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Other Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="transaction" icon={<TransactionOutlined />}>
                    Other Transactions
                </Menu.Item>
                <Menu.Item key="clock" icon={<ClockCircleOutlined />}>
                    Other History
                </Menu.Item>
        </Menu>
        );
    
    }
}

export default Navbar;
