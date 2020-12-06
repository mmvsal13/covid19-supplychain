import React, { useState, useEffect } from 'react';
import { Button, Link } from 'antd';
import Web3 from 'web3';
import axios from 'axios';
import Center from '../components/center.js';
import Image from './image-1.png';
import Register from './Register.js'
//import { Auth } from '../types';

let web3 = undefined; // Will hold the web3 instance
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [goToReg, setGoToReg] = useState(false);

    function handleAuthenticate(publicAddress, signature) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
            //change
            body: JSON.stringify({ publicAddress, signature }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }).then((response) => response.json());
    }

    async function handleLogin() {
        const { onLoggedIn } = props;
        console.log('handling login');
        // Check if MetaMask is installed
        if (!window.ethereum) {
            // what is window
            console.log('checking for metamask');
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
        console.log(publicAddress);
        setLoading(true);

        // Look if user with current publicAddress is already present on backend

        fetch(`http://localhost:4000/api/users?publicAddress=${publicAddress}`, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response)
            // If yes, retrieve it. If no, create it.
            .then((text) => console.log(text))
            .then((users) => (users ? users[0] : 
                
                    setGoToReg(true)
            ))
            // Popup MetaMask confirmation modal to sign message
            .then(handleSignMessage)
            // Send signature to backend on the /auth route
            .then(handleAuthenticate)
            // Pass accessToken back to parent component (to save it in localStorage)
            .then(onLoggedIn)
            .catch((err) => {
                window.alert(err);
                setLoading(false);
            });
    }

    async function initialValidation() {
        return name.length > 0 && address.length > 0 && password.length > 0;
    }

    async function handleSignMessage(publicAddress, nonce) {
        try {
            const signature = await web3.eth.personal.sign(
                `I am signing my one-time nonce: ${nonce}`,
                publicAddress,
                '' // MetaMask will ignore the password argument here
            );
        } catch (err) {
            console.log(err);
        }
    }

    /*
    function handleSignup() {
        console.log("going to registration page")
        useEffect(() => {
                setGoToReg(true)
        })
    }
    */

    //maybe also add helpful links to get people to make metamask acct
    return ( <>
    {
        goToReg === true ? (
            <Register />
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
                    fontWeight: 'bold',
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
                    <img src={Image} />
                    <h3
                        style={{
                            fontSize: '40px',
                            color: '#620E0E',
                            fontWeight: '800',
                            lineHeight: '60px',
                        }}
                    >
                        Sign in with Metamask
                    </h3>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={handleLogin}
                        style={{
                            color: 'white',
                            backgroundColor: '#FB8027',
                            width: '250px',
                            height: '65px',
                            fontSize: '25px',
                        }}
                    >
                        Continue
                    </Button>
                    <a
                        style={{
                            onClick: {handleLogin},
                            color: '#C71F03',
                            fontWeight: '600',
                            fontSize: '20px',
                            style: 'normal',
                            
                        }}
                        className="MakeAccount"
                        href="/register"
                    >
                        I don't have an account
                    </a>
                </div>
            </div>
        </div>
        )
    } </>
       
    );
}

export default Login;

/*
 window.open('/register');
            return fetch(`http://localhost:4000/api/users`, {
                body: JSON.stringify({ publicAddress }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).then((response) => response.json());
            */
