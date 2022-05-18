import React, {useEffect, useState} from 'react';
import "./vehicles.scss"
import * as ReactBootStrap from "react-bootstrap";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchVehicles, setSearchVehicles] = useState('')



    useEffect(() => {
            async function vehicles() {
                let vehicles = await fetch('https://swapi.dev/api/vehicles/');
                let api = await vehicles.json();
                setVehicles(api.results);
                setLoading(false)

            }

            vehicles()
        },
        [])
    console.log('vehicles', vehicles)
    return (
        <div>
            <div className="container vehicle-text">search Vehicles</div>
            {loading? (<ReactBootStrap.Spinner animation="border" className="container spinner "/>) : (

                <div className="vehicle-div">
                    <input type="text"
                           placeholder="Search vehicles.."
                           className="input"
                           onChange={(e) => setSearchVehicles(e.target.value)}/>

                    {vehicles.filter((valueVeh) =>{
                        if (searchVehicles === "") {
                            return valueVeh;
                        }else if (
                            valueVeh.name.toLowerCase().includes(searchVehicles.toLowerCase())
                        ){
                            return valueVeh
                        }
                    })
                        .map((vehicle, index) => {
                    return (
                        <ul className="vehicle">
                            <h1 className="h1-vehicles">name</h1>
                            <li key={index}>{vehicle.name}</li>
                            <h2 className="h2-vehicles">model</h2>
                            <li key={index}>{vehicle.model}</li>
                            <h2 className="h2-vehicles">cost</h2>
                            <li key={index}>{vehicle.cost_in_credits}</li>
                            <h2 className="h2-vehicles">speed</h2>
                            <li key={index}>{vehicle.max_atmosphering_speed}</li>
                        </ul>
                    )
                })}
            </div>
            )}

        </div>
    );
}

export default Vehicles;