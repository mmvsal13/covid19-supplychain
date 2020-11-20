//import React from 'react';
import './../App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
//import './App.css';
import LoadingScreen from './LoadingScreen.js' 
import { Link } from 'react-router-dom';

function Home() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div style={{ fontSize: 30, fontWeight: 'bold' }}>Hello!
    {/*I put this in as a doorway to my page*/}
      <div>
        <Link to="/Manufacturer">
          <button>Manufacturer!</button>
        </Link>
      </div>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

function link() {

}

export default Home;

