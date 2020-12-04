// import React, { useState } from 'react';
// import { Form, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
// import Web3 from 'web3';
// import axios from 'axios';

// //import { Auth } from '../types';

// let web3 = undefined; // Will hold the web3 instance
// // import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// function Login(props) {
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState('');

//     function handleAuthenticate(
//         publicAddress,
//         signature,
//      ) {
//         fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, { //change
//             body: JSON.stringify({ publicAddress, signature }),
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             method: 'POST',
//           }).then((response) => response.json());
//      }
    
//     async function handleLogin() {
//         const { onLoggedIn } = props;
//         console.log("handling login")
//         // Check if MetaMask is installed
//         if (!window.ethereum) {
//             // what is window
//             console.log("checking for metamask")
//             window.alert('Please install MetaMask first.');
//             return;
//         }

//         if (!web3) {
//             try {
//                 // Request account access if needed
//                 await window.ethereum.enable();

//                 // We don't know window.web3 version, so we use our own instance of Web3
//                 // with the injected provider given by MetaMask
//                 web3 = new Web3(window.ethereum);
//             } catch (error) {
//                 window.alert('You need to allow MetaMask.');
//                 return;
//             }
//         }
//         const coinbase = await web3.eth.getCoinbase();
//         if (!coinbase) {
//             window.alert('Please activate MetaMask first.');
//             return;
//         }

//         const publicAddress = coinbase.toLowerCase();
//         console.log(publicAddress)
//         setLoading(true);

//         // Look if user with current publicAddress is already present on backend

//         fetch(
//         `http://localhost:3000/users?publicAddress=${publicAddress}`,{

//             headers: {'Content-Type': 'application/json'},
//             })

//             .then((response) => response)
//             // If yes, retrieve it. If no, create it.
//             .then((text) => console.log(text))
//             //.then((users) => (users.length ? users[0] : handleSignup))
//             // Popup MetaMask confirmation modal to sign message
//             .then(handleSignMessage)
//             // Send signature to backend on the /auth route
//             .then(handleAuthenticate)
//             // Pass accessToken back to parent component (to save it in localStorage)
//             .then(onLoggedIn)
//             .catch((err) => {
//                 window.alert(err);
//                 setLoading(false);
//             });
            
//     }

//     async function initialValidation() {
//         return name.length > 0 && address.length > 0 && password.length > 0;
//     }

//     async function handleSignMessage (
//         publicAddress,
//         nonce,
//       ) {
//         try {
//           const signature = await web3.eth.personal.sign(
//             `I am signing my one-time nonce: ${nonce}`,
//             publicAddress,
//             '' // MetaMask will ignore the password argument here
//           );

//     function handleSignup ()  {
//         window.open("/register");
//       };

    
//     //maybe also add helpful links to get people to make metamask acct
//     return (
//         <div className="registration-page">
//             <div className="LogIn">
//                 <Button variant="primary" type="submit" onClick={handleLogin}>
//                     Log in with Metamask
//                 </Button>
//             </div>
//             <div className="Register">
//                 <Button to="/register" className="MakeAccount" href="">
//                     I don't have an account
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default Login;
