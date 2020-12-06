import React, { useState } from 'react';
//import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Button, Tabs, Input, Upload, message } from 'antd';
import SkeletonImage from 'antd/lib/skeleton/Image';
import UserHeader from '../components/UserHeader.js'
import Center from '../components/center.js';
import Login from './Login.js'
//import Web3 from 'web3';
//import axios from 'axios';

//import { Auth } from '../types';

let web3 = undefined; // Will hold the web3 instance
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Register() {
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [metamaskAddress, setMetamaskAddress] = useState('');
    const [toLogin, setToLogin] = useState(false);
    const [role, setRole] = useState('')

    
/*
    async function handleLogin() {
        //const { onLoggedIn } = this.props;

        // Check if MetaMask is installed
        if (!window.ethereum) {
            // what is window
            window.alert('Please install MetaMask first.');
            return;
        }

        if (!web3) {
            try {
                // Request account access if needed
                await window.ethereum.enable();

                // We don't know window.web3 version, so we use our own instance of Web3
                // with the injected provider given by MetaMask
                web3 = new Web3(window.ethereum);
            } catch (error) {
                window.alert('You need to allow MetaMask.');
                return;
            }
        }
        const coinbase = await web3.eth.getCoinbase();
        if (!coinbase) {
            window.alert('Please activate MetaMask first.');
            return;
        }

        const publicAddress = coinbase.toLowerCase();
        setLoading(true);

        // Look if user with current publicAddress is already present on backend

        fetch();
        //`${process.env.BACKEND_URL}/users?publicAddress=${publicAddress}`
        //fetch user
        /*
        .then((response) => response.json())
        // If yes, retrieve it. If no, create it.
        .then((users) =>
          users.length ? users[0] : this.handleSignup(publicAddress)
        )
        // Popup MetaMask confirmation modal to sign message
        .then(this.handleSignMessage)
        // Send signature to backend on the /auth route
        .then(this.handleAuthenticate)
        // Pass accessToken back to parent component (to save it in localStorage)
        .then(onLoggedIn)
        .catch((err) => {
          window.alert(err);
          this.setState({ loading: false });
        });
        
    }

    async function initialValidation() {
        return name.length > 0 && address.length > 0 && password.length > 0;
    }

    function handleLogin(event) {
        //checks to see if metamask is installed
        if (!window.ethereum) {
            window.alert('Please install MetaMask first.');
            return;
        }
        //send fetch request to user public address
        //checks if user public address is in database
    }
*/
    function handleSubmit() {
        setToLogin(true)
        console.log('hi')
        fetch(`http://localhost:4000/api/auth/users`, {
                body: JSON.stringify(
                    { 
                        "companyName": name,
                        "publicAddress": metamaskAddress,
                        "address": address,
                        "role": role
                    }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).then((response) => response.json());
        
    }
    //maybe also add helpful links to get people to make metamask acct
    
    return ( <> {
        toLogin === true? (
            <Login />
        ) : (
            <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#E9FFFA',

                position: 'absolute',
            }}
        >
            <Center />

            <div
                style={{
                    fontSize: 30,
                    
                    position: 'absolute',
                    zIndex: '0',
                    margin: 'auto',
                    top: '50%',
                    left: '50%',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className="LogIn"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ fontSize: '20px', marginTop: '2vh' }}>Company Name</div>
                        <Input onChange={(event) => setName(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Supplychain Role</div>
                        <Input onChange={(event) => setRole(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Metamask Address</div>
                        <Input onChange={(event) => setMetamaskAddress(event.target.value)} />

                        <div style={{ fontSize: '20px', marginTop: '2vh' }}>Location</div>
                        <Input onChange={(event) => setAddress(event.target.value)} />
                    <Button
                        variant="primary"
                        type="submit"
                        onClick= {handleSubmit}
                        style={{
                            color: 'white',
                            backgroundColor: '#FB8027',
                            width: '200px',
                            height: '45px',
                            fontSize: '25px',
                            marginTop: '20px',
                        
                        }}
                    >
                        REGISTER
                    </Button>
                    
                </div>
            </div>
        </div>
        )
    } </>

        
    );
  
}

export default Register;
