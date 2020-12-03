import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import FormMan from '../components/form.js';


// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Manufacturer() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Address ${address} and amount ${amount}`);
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);

    return (
        <>
            {loading === false ? (

                <div style={{ fontSize: 30, fontWeight: 'bold' }}>
                    <Navbar/>
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
