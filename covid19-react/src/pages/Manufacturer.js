import './../App.css';
import React, { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen.js' 
import { Link } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Manufacturer() {
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState(0)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Address ${address} and amount ${amount}`)
    }

    useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
    }, [])

    return (
    <>
    {loading === false ? (
    <div style={{ fontSize: 30, fontWeight: 'bold' }}> 
    Welcome!
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input type="text" 
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    Amount:
                    <input type="number" 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
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
