import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Manufacturer from './pages/Manufacturer';
import Users from './pages/Users';
import Regulator from './pages/regulator/Regulator.js';
import ApproveRequests from './pages/regulator/ApproveRequests.js';

// https://reactrouter.com/web/guides/primary-components

/* Sample component libraries

https://react-bootstrap.github.io/
https://ant.design/components/overview/
https://react.semantic-ui.com/
https://material-ui.com/

*/

/*
https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial
*/
function App() {
    return (
        <Switch>
            {/* Maybe add navbar for regulator-sub pages then users-mfg pages*/}
            <Route path="/regulator/approve_requests">
                <div>View requests to get QR codes from companies</div>
            </Route>
            <Route path="/regulator">
                <div>
                    regulator home page - view useful statistics and maps of distribution centers
                    here
                </div>
            </Route>
            <Route path="/manufacturer">
                <div>manufacturer specific page, comes off of distributor home page</div>
            </Route>
            <Route path="/users">
                {/*Gives users the ability to upload csv files*/}
                <Users />
            </Route>
            <Route path="/history/:id">
                <div>check history for token id</div>
            </Route>
            <Route path="/not_logged_in">
                <div>You need to sign in to see this page</div>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
