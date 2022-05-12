import React, {useEffect, useState} from 'react';
import "./vehicles.scss"

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
            async function vehicles() {
                let vehicles = await fetch('https://swapi.dev/api/vehicles/');
                let api = await vehicles.json();
                setVehicles(api.results);
            }

            vehicles()
        },
        [])
    console.log('vehicles', vehicles)
    return (
        <>
            <div className="container">Vehicles</div>
            <div className="vehicle-div">
                {vehicles.map((vehicle, index) => {
                    return (
                        <ul className="vehicle">
                            <h1 className="h1-vehicles">name</h1>
                            <li key={index}>{vehicle.name}</li>
                            <h2 className="h2-vehicles">model</h2>
                            <li key={index}>{vehicle.model}</li>
                            <h2 className="h2-vehicles">cost</h2>
                            <li key={index}>{vehicle.cost_in_credits}</li>
                        </ul>
                    )
                })}
            </div>
        </>
    );
}

export default Vehicles;