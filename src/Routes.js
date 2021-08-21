import React from 'react';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path='/dogs'>
                <DogList dogs={dogs} />
            </Route>
            <Route path='/dogs/:name'>
                <FilterDogDetails dogs={dogs} />
            </Route>
            <Redirect to='/dogs' />
        </Switch>
    )
}

function FilterDogDetails({dogs}) {
    const {name} = useParams();

    if(name) {
        const thisDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails dog={thisDog} />;
    }
    return null;
}

export default Routes;