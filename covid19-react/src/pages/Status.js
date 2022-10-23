import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//eventually use user address and map things to that address

function Status() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios.get('http://localhost:4000/api/request/getRequests')
                .then(res=>setData(res.data.requests));
            console.log(data);
            // setLoading(false);
        };
        getData();
    });
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
            // render: (text) => <a>{text}</a>,
        },{
            title: 'Client',
            dataIndex: 'Client',
            key: 'Client',
            // render: (text) => <a>{text}</a>,
        },{
            title: 'ShipmentID',
            dataIndex: 'ShipmentID',
            key: 'ShipmentID',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
        },
        {
            title: 'Order ID',
            dataIndex: 'Order',
            key: 'Order',
        },
        {
            title: 'Quantity',
            dataIndex: 'Quantity',
            key: 'Quantity',
        },
        {
            title: 'Tag',
            key: 'Tag',
            dataIndex: 'Tag',
            render: (tags) => (
                <>
                    {tags.map((tag) => {
                        let color = 'yellow';
                        if (tag === 'APPROVED') {
                            color = 'green';
                        } else if (tag === 'REJECTED') {
                            color = 'red';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
    ];


    //dummy data for now will get data from server in the future
    const dummy = [{
        ShipmentID: "shipID",
        Date: "date",
        Order: "orderID",
        Quantity: 0,
        Client: "user",
        Tag: ["APPROVED"],
    }];

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
            <Navbar/>
            <div style={{ margin: '5vw' }}>
                <UserHeader active="Status" />
                <div
                    style={{
                        width: '90vw',
                        height: '70vh',
                        backgroundColor: 'rgba(255, 240, 219, 1)',
                        borderBottomLeftRadius: '2vw',
                        borderBottomRightRadius: '2vw',
                        padding: '3vh 5vw 3vh 5vw',
                    }}  
                >
                    <Table columns={columns} dataSource={data} size="middle"/>
                </div>
            </div>
            </div>
        </>
    );  
}

export default Status;
