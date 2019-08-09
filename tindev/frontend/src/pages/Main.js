import React from 'react';

import logo from '../assets/logo.svg';

export default function Main({ match }) {
    return(
        <div className="main-container">
        <img src={logo} alt="Tindev"/>
        <ul>
            <li>
                <img src="https://avatars0.github/usercontent/u/" alt="" />
                <footer>Marcelo Gasparetti</footer>
            </li>
        </ul>
    </div>
    )   
}