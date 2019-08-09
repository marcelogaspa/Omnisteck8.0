import React from 'react';
import logo from '../assets/logo.svg'
import './login.css'

export default function Login() {
    return (
        <div className="login-container">
            <form>
            <img src={logo} alt="Tindev" />
            <input placeholder="Sign in"/>
            <button type="submit">Enter</button>
            </form>
            
        </div>        
    );
}