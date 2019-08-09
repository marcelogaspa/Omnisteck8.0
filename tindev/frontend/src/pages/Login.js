import React, { useState} from 'react';
import logo from '../assets/logo.svg';
import './login.css';

import api from '../services/api';

export default function Login() {
    const[username, setUsername] = useState ('');

    async function handlesubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handlesubmit}>
             <img src={logo} alt="Tindev" />
             <input
             placeholder="Username"
             value={username}
             onChange={e => setUsername(e.target.value)}
             />
             <button type="submit">Sign in</button>
            </form>  
        </div>        
    );
}