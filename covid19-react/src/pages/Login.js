import './../App.css';
import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Web3 from 'web3';
import axios from 'axios';

//import { Auth } from '../types';

let web3 = undefined; // Will hold the web3 instance
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Register() {
   
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');

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
            console.log("hi")
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
    //maybe also add helpful links to get people to make metamask acct
    return (
        <div className="registration-page">
            <div className="LogIn">
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Log in with Metamask
                </Button>
            </div>
            <div className="Register">
                <a className="MakeAccount" href = "">I don't have an account</a> 
            </div>
        </div>
    );
}

export default Register;