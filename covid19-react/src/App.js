import React from 'react';
import './App.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Manufacturer from './pages/Manufacturer';
import Users from './pages/Users';
import Regulator from './pages/regulator/Regulator.js';
import ApproveRequests from './pages/regulator/ApproveRequests.js';
import History from './pages/History';
import LoginPage from'./pages/LoginPage';
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
            <Route path="/regulator/ApproveRequests">
                <ApproveRequests />
            </Route>
            <Route path="/regulator">
                <Regulator />
            </Route>
            <Route path="/manufacturer">
                <Manufacturer />
            </Route>
            <Route path="/users">
                {/*Gives users the ability to upload csv files*/}
                <Users />
            </Route>
            <Route path="/history/:id">
                <History />
            </Route>
            <Route path="/not_logged_in">
                <div>You need to sign in to see this page</div>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
