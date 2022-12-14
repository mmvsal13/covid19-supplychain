//import css file

import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import Users from './Users.js';
import Regulator from './regulator/Regulator.js'
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
	const [authState, setAuthState] = useState(false);
	const [isRegulator, setIsRegulator] = useState(false);

	useEffect (()  => {
		// Access token is stored in localstorage
		const ls = window.localStorage.getItem(LS_KEY);
		console.log(ls)
		console.log(JSON.parse(ls))
		const auth = ls && JSON.parse(ls);
		console.log(auth)
		setAuthState(false);
		console.log(handleLoggedIn)
	}, [])
	
		
	function handleIsRegulator(isRegulator, role) {
		console.log("checking if it is regulator")
		if (role.toLowerCase() == "regulator") {
			setIsRegulator({role})
			console.log(isRegulator)
			console.log(authState)
		} 
	}

	function handleLoggedIn(auth) {
		console.log("handleLoggedIn")
		//localStorage.setItem(LS_KEY, JSON.stringify(auth));
		setAuthState({auth});
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
			<> {
				authState ? (
					
						isRegulator ? (
							<Regulator />
						) : (
							<Users />
						)
					
					
				) : (
					
					<div className="Signin">
				<div className="App-signin">
					
					<Login onLoggedIn={handleLoggedIn}
					auth = {authState}
					onIsRegulator = {handleIsRegulator}
					isReg = {isRegulator} />
				</div>
			</div>
				)
			

				}
				</>
				)
}


export default LoginPage;
