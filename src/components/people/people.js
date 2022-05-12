import React from 'react';
import App from '../../App'

function People(props) {

    return (
        <div>{People.map((people) =>{
            return <h1>{people}</h1>
        })}</div>
    );
}

export default People;