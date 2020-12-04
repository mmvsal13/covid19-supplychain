import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import axios from 'axios';



// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Request() {
    // const [loading, setLoading] = useState(true);
    const [shipID, setShipID] = useState(0);
    const [amount, setDate] = useState(0);
    const [orderID, setID] = useState(0);
    const [quantity, setQuanity] = useState(0);
    const [client, setClient] = useState('');


    const submit = async () => {
        console.log('clicked');
        message.loading('Requesting tokens');
        await axios.post('http://localhost:4000/api/token/sendRequest', {
            "shipID": shipID,
            "amount": amount,
            "orderID": orderID,
            "quantity": quantity,
            "client": client,
        });
        message.success('The request has been received');
    };

    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 6000);
    // }, []);

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
            <Navbar page='man'/>
            <div style={{ margin: '5vw' }}>
                <UserHeader active="Request" />
                <div
                    style={{
                        width: '90vw',
                        height: '70vh',
                        backgroundColor: 'rgba(255, 240, 219, 1)',
                        borderBottomLeftRadius: '2vw',
                        borderBottomRightRadius: '2vw',
                        padding: '3vh 25vw 3vh 25vw',
                    }}  
                >
                    <div style={{ fontSize: '20px', marginTop: '2vh'}}>Shipment ID</div>
                    <Input onChange={(Number) => setShipID(Number)} />

                    <div style={{ fontSize: '20px', marginTop: '2vh' }}>Manufacture Date</div>
                    <Input onChange={(Number) => setDate(Number)} />

                    <div style={{ fontSize: '20px', marginTop: '2vh'}}>Order ID</div>
                    <Input onChange={(Number) => setID(Number)} />

                    <div style={{ fontSize: '20px', marginTop: '2vh' }}>Quantity</div>
                    <Input onChange={(Number) => setQuanity(Number)} />

                    <div style={{ fontSize: '20px', marginTop: '2vh' }}>Client</div>
                    <Input onChange={(text) => setClient(text)} />
                     
                    <Button
                        onClick={submit}
                        style={{ width: '35%', margin: '5vh 35% 0 35%' }}
                        size="large"
                        type="primary"
                    >
                        CREATE
                </Button>
                </div>
            </div>
        </div>
        )
        </>
    );
}

export default Request;
