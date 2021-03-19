import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { Avatar, Button, Checkbox } from '@material-ui/core';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const Login = () => {
    const [newUser,setNewUser]=useState(false);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const { register, handleSubmit: handleLoginSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    
    return (
        <div className="form-style">
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit(onSubmit)}>
                
                <input name="email" placeholder="Email" ref={register({required: true,pattern: /\S+@\S+\.\S+/})} /> <br/>
                {errors.email && <span>Enter your email correctly</span>} <br/>
                <input type="password" name="password" placeholder="Password" ref={register({required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} /> <br/>
                {errors.password && <span>Enter your password correctly</span>} <br/>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>
                <div>
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> Remember me</div>  <div style={{color: 'red'}}>Forgot password?</div> </div> <br/>
     
                <Button
                        type="submit"
                        variant="contained"
                        color="secondary">
                        Login
                    </Button> 
                    
            </form> 
            
            <hr/>
            <p>Don't have an account? <span onClick={()=>setNewUser(!newUser)} style={{color: 'red',cursor: 'pointer'}}>Sign Up now</span></p>
            <p>Or</p>
            
            <Button variant="outlined" color="secondary" onClick={handleGoogleSignIn}>
            
            <FontAwesomeIcon icon={faGoogle} />
             &nbsp;&nbsp; Sign in with google
            </Button>
            
        </div>
    );
};

export default Login;