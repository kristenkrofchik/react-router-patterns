import React from "react";
import { Link } from 'react-router-dom';

function DogList({dogs}) {
    return (
        <div className='DogList'>
            <h1>
                These are the Dawgs! Click on a Pup for More Info!
            </h1>
            <ul>
                {dogs.map(d => (
                    <li>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;