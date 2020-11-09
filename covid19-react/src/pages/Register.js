import React from 'react';
import './../App.css';
import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const axios = require('axios').default;

    function initialValidation() {
        return name.length > 0 && address.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        
        axios.post('/register', {
            name: name,
            address: address,
            password: password
          })
          .then(function (response) {
            //server returns whether or not the address is valid
            if (response) {
                //go to next page
            } else {
                //go to error page
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    //maybe also add helpful links to get people to make metamask acct 
    return (
        <div className="Register">
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
              <ControlLabel>Company Name</ControlLabel>
              <FormControl
                value={name}
                onChange={e => setName(e.target.value)}
                type="name"
              />
            </FormGroup>
            <FormGroup controlId="address" bsSize="large">
              <ControlLabel>Address</ControlLabel>
              <FormControl
                value={address}
                onChange={e => setAddress(e.target.value)}
                type="address"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button variant="primary" disabled={!initialValidation()} type="submit" onClick={handleSubmit}>
                    Register
            </Button>
          </form>
        </div>
      );
    


    //return <div style={{ fontSize: 30, fontWeight: 'bold' }}>Please Register lmao</div>;
}

export default Register;
