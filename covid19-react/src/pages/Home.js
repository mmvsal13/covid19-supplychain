//import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import { Link } from 'react-router-dom';
import Center from '../components/center.js'
import { Button } from 'antd';
import Column from 'antd/lib/table/Column';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000);
    }, []);

    return (
        <>
            {loading === false ? (

                <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA',
                
                        position: 'absolute',
                
                }}>
                    
                    <Center />
                    
                    <div style={{ fontSize: 30, fontWeight: 'bold',
                    position: 'absolute',
                    zIndex: '0',
                    margin: 'auto',
                    top: '50%',
                left: '50%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)' 
                
                }}>
                        <div style = {{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'column'
                        }}>
                            <h1 style = {{
                                fontSize: '130px',
                                color: '#620E0E',
                                fontWeight: '400',
                                lineHeight: '161.42px',
                                marginBottom: '-5%'
                            }}>Curetrack</h1>
                            <h4 style = {{
                                fontSize: '40px',
                                color: '#620E0E',
                                fontWeight: '800',
                                lineHeight: '60px'
                            }}>one line description</h4>
                            <Link to="/login">
                            <Button style = {{
                                color: 'white',
                                backgroundColor: '#FB8027',
                                width: '250px',
                                height: '65px',
                                fontSize: '25px'
                                
                            }}> GET STARTED</Button>
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
