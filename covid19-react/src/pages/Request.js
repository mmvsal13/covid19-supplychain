import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import axios from 'axios';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Request() {
    // const [loading, setLoading] = useState(true);
    const [shipID, setShipID] = useState('');
    const [date, setDate] = useState('');
    const [orderID, setID] = useState('');
    const [quantity, setQuanity] = useState(0);
    const [client, setClient] = useState('');

    const submit = async () => {
        console.log(shipID);
        console.log(date);
        console.log(orderID);
        console.log(quantity);
        console.log(client);

        message.loading('Requesting tokens');
        await axios.post('http://localhost:4000/api/request/sendRequest', {
            ShipmentID: 'shipID',
            Date: 'jiji',
            Order: 'orderID',
            Quantity: 0,
            Client: 'client',
        });
        message.success('The request has been received');
    };

    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 6000);
    // }, []);

    return (
        <>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
                <Navbar page="man" />
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
                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Shipment ID</div>
                        <Input onChange={(event) => setShipID(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Manufacture Date</div>
                        <Input onChange={(event) => setDate(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Order ID</div>
                        <Input onChange={(event) => setID(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Quantity</div>
                        <Input onChange={(event) => setQuanity(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Client</div>
                        <Input onChange={(event) => setClient(event.target.value)} />

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
