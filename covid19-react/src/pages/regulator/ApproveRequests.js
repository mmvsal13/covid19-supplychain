import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { Layout } from 'antd';
import { Table, Tag, Space } from 'antd';
import Navbar from '../../components/Navbar.js';
import { Header } from 'antd/lib/layout/layout';

function ApproveRequests() {
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
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a style={{color: 'green'}}>Approve</a>
                    <a style={{color: 'red'}}>Deny</a>
                    <a style={{color: 'orange'}}>Message</a>
                </Space>
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
                <div style={{
                    width: '90vw',
                    height: '70vh',
                    backgroundColor: 'rgba(255,255,255, 1)',
                    borderLeft: '2vw',
                    borderBottomLeftRadius: '2vw',
                    borderBottomRightRadius: '2vw',
                    padding: '3vh 5vw 3vh 5vw',
                    }}> 
                    <h1>Request Status</h1>
                    <Table columns={columns} dataSource={data} size="small"/>
                </div>
            </div>
        </div>
        </>
    );  
}
//rgba(255,255,255, 0.3)

export default ApproveRequests;
