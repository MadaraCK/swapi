import React from 'react';

function Vehicles(props) {
    return (
        <div>{Vehicles.map((vehicles) =>{
            return <h1>{vehicles}</h1>
        })}</div>    );
}

export default Vehicles;