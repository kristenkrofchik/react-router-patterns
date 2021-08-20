import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({dogs}) {
    const dogLinks = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
    ))
    return (
        <nav>
            <NavLink exact to='/dogs'>Dog List</NavLink>
            {dogLinks}
        </nav>
    );
}

export default Nav;