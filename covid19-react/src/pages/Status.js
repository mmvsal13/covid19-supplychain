import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Status() {
    // const [loading, setLoading] = useState(true);

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
            title: 'Status',
            key: 'Status',
            dataIndex: 'Status',
                 render: tags => (
                     <>
                         {tags.map((tag) => {
                             let color = 'magenta';
                             if (tag === 'APPROVED') {
                                 color = 'green';
                             } else if (tag === 'PENDING') {
                                 color = 'yellow';
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
    const data = [
        {
            ShipmentID: '1',
            Date: '11898',
            Order: 6900,
            Client: 'mmvsal13@berkeley.edu',
            Status: ['REJECTED'],
        },
    ];

    const getData = async () => {
        let load = await axios.get('http://localhost:4000/api/request/getRequests');
        return load;
    };
        //retrieve actual data from server

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
            <Navbar/>
            {console.log('hiiii')}
            {console.log(getData().then(res => console.log(res.data.requests[0])))}
            {console.log('proceed after api call')}
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
