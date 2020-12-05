import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import { Table, Tag, Space } from 'antd';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Status() {
    // const [loading, setLoading] = useState(true);

    const columns = [
        {
            title: 'Request ID',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Decision Date',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Contact Info',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Approved Status',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags) => (
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
            key: '1',
            name: '11898',
            amount: 6900,
            address: 'mmvsal13@berkeley.edu',
            tags: ['REJECTED'],
        },
    ];

    const getData = async () => {
        console.log('clicked');
        message.loading('Requesting tokens');
        // await axios.post('http://localhost:4000/api/token/batchTransferTokens', {
        // });
        message.success('The request has been received');
        //retrieve actual data from server
    };

    return (
        <>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
                <Navbar />
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
                        <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Status;
