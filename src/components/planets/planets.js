import React,{useState,useEffect} from 'react';
import "./planets.scss"
function Planets(props) {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
            async function planets() {
                let planets = await fetch('https://swapi.dev/api/planets/');
                let api = await planets.json();
                setPlanets(api.results);
            }
        },
        [])
    return (
        <div className="container">Planets</div>);
}

export default Planets;