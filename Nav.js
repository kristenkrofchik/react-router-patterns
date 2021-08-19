import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <ul>
            <li><Link to='/dogs'>Dog List</Link></li>
            <li><Link to='/dogs/:name'>Dog Details</Link></li>     
        </ul>
    );
}

export default Nav;