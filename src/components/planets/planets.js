import React from 'react';

function Planets(props) {

    return (
        <div>{Planets.map((planets) =>{
            return <h1>{planets}</h1>
        })}</div>    );
}

export default Planets;