//import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);

    return (
        <>
            {loading === false ? (

                <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
                    
                    <div className = "home-center"></div>
                    <div style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Hello!
                        <div>
                            <Link to="/login">
                            <button>Login!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

function link() {}

export default Home;
