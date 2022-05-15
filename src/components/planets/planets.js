import React,{useState,useEffect} from 'react';
import "./planets.scss"
import * as ReactBootStrap from "react-bootstrap";
function Planets(props) {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchPlanets, setSearchPlanets] = useState('')



    useEffect(() => {
            async function planets() {
                let planets = await fetch('https://swapi.dev/api/planets/');
                let api = await planets.json();
                setPlanets(api.results);
                setLoading(false)

            }
            planets()
        },
        [])
    return (
        <div>
            <div className="container vehicle-text">search planets</div>
            {loading? (<ReactBootStrap.Spinner animation="border" className="container spinner "/>) : (
                <div className="vehicle-div">
                    <input type="text"
                           placeholder="Search planets.."
                           className="input"
                           onChange={(e) => setSearchPlanets(e.target.value)}/>
                {planets.filter((valuePlan) => {
                    if (searchPlanets === ""){
                        return valuePlan;
                    }else if (
                        valuePlan.name.toLowerCase().includes(searchPlanets.toLowerCase())
                    ){
                        return valuePlan
                    }
                })
                    .map((planets, index) => {
                    return (
                        <ul className="vehicle">
                            <h1 className="h1-vehicles">name</h1>
                            <li key={index}>{planets.name}</li>
                            <h2 className="h2-vehicles">rotation period</h2>
                            <li key={index}>{planets.rotation_period}</li>
                            <h2 className="h2-vehicles">climate</h2>
                            <li key={index}>{planets.climate}</li>
                            <h2 className="h2-vehicles">terrain</h2>
                            <li key={index}>{planets.terrain}</li>
                            <h2 className="h2-vehicles">population</h2>
                            <li key={index}>{planets.population}</li>
                        </ul>
                    )
                })}
            </div>
            )}

        </div>
    );
}

export default Planets;