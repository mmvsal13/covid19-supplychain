import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import FormMan from '../components/Form.js';


// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Manufacturer() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //check to make sure address and amount are valid
        //upload the request to mongodb
        //should I even be collecting address/we might already have that stored for the user
        alert(`Submitting Address ${address} and amount ${amount}`);
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);

    return (
        <>
            {loading === false ? (

                <div style={{ fontSize: 30, fontWeight: 'bold' }}>
                    <Navbar page={'man'}/>
                    Welcome!
                    <FormMan/>
                    <div>
                        <Link to="/">
                            <button>Return home</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
    // return <div style={{ fontSize: 30, fontWeight: 'bold' }}>Hello</div>;
}

export default Manufacturer;
