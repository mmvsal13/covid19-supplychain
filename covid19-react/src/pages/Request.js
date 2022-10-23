import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import UserHeader from '../components/UserHeader.js';
import { Button, Tabs, Input, Upload, message } from 'antd';
import axios from 'axios';
import { P } from '@antv/g2plot';
import { IdcardFilled } from '@ant-design/icons';
import { getMappingField } from '@antv/g2plot/lib/adaptor/geometries/base';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Request() {
    // const [loading, setLoading] = useState(true);
    const [id, setIden] = useState(0);
    const [shipID, setShipID] = useState('');
    const [date, setDate] = useState('');
    const [orderID, setID] = useState('');
    const [quantity, setQuanity] = useState(0);
    const [client, setClient] = useState("");
    const tag = ["PENDING"];

    useEffect(() => { 
        const getID = async () => {
            await axios.get('http://localhost:4000/api/request/getRequests')
                .then( res => setIden(res.data.requests.length));
            };
        getID();
    });
    
    const submit = async () => {
        console.log(id);
        console.log(shipID);
        console.log(date);
        console.log(orderID);
        console.log(quantity);
        console.log(client);
        // message.loading('Requesting tokens');
        //approval happens automatically so should i do it here
        await axios.post('http://localhost:4000/api/request/sendRequest', {
            "ID": id,
            "ShipmentID": shipID,
            "Date": date,
            "Order": orderID,
            "Quantity": quantity,
            "Client": client,
            "Tag": tag,
        }).then(response => console.log(response.data));
        message.success('The request has been received');
    };

    // function getID(res) {
    //     let a = res.length;
    //     console.log(a);
    //     setIden(res.length);
    // }


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
        </>
    );
}

export default Request;
