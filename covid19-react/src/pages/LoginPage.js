//import css file

import React, { useState } from 'react';
import Login from './Login.js';
import Users from './Users.js';
//what is this??
const LS_KEY = 'login-with-metamask:auth';

//not sure what this is
/*
interface State {
	auth?: Auth;
}
*/

function LoginPage(props) {
    //state: State = {}; older version of react
    const [authState, setAuthState] = useState({});

	function componentDidMount() {
		// Access token is stored in localstorage
		const ls = window.localStorage.getItem(LS_KEY);
		const auth = ls && JSON.parse(ls);
		setAuthState(auth);
	}

	function handleLoggedIn(auth) {
		localStorage.setItem(LS_KEY, JSON.stringify(auth));
		setAuthState({ auth });
	};

	function handleLoggedOut() {
		localStorage.removeItem(LS_KEY);
		setAuthState({ auth: undefined });
	};

    //took out
    /*
    {authState ? (
						<h1>uhhhh</h1>
					) : (
						<Login onLoggedIn={this.handleLoggedIn} /> //probably dont need the handleloggedin part
                    )}
    */
   
		return (



            
			<div className="Signin">
				<div className="App-signin">
                    <Login onLoggedIn={handleLoggedIn} />
				</div>
			</div>
        )
}


export default LoginPage;
