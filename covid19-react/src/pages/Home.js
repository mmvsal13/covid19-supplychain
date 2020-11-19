//import React from 'react';
import './../App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
//import './App.css';
import LoadingScreen from './LoadingScreen.js' 

function Home() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div style={{ fontSize: 30, fontWeight: 'bold' }}>Hello!</div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default Home;

