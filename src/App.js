import React, {useState, useEffect} from 'react';
import './App.scss'
import Planets from "./components/planets/planets";
import People from "./components/people/people";
import Navbar from "./components/navbar/navbar";
import Starwars from "./components/starwars/starwars";
import NavBarMenu from "./components/menu/menu"
import Menu from "./components/menu/menu";


function App(props) {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);


    useEffect(() => {
            async function People() {
                let people = await fetch('https://swapi.dev/api/people/');
                let data = await people.json();
                setPeople(data.results);
            }

            async function Planets() {
                let planets = await fetch('https://swapi.dev/api/planets/')
                let data = await planets.json();
                setPlanets(data.results);
            }
            async function Vehicles() {
                let vehicles = await fetch('https://swapi.dev/api/vehicles/')
                let data = await vehicles.json();
                setVehicles(data.results);
            }

            People()
            Planets()
            Vehicles()
        },
        [])
    console.log('people', people)
    console.log('planets', planets)
    console.log('vehicles', vehicles)

    return (
        <div className="bgc">
            <div className="container">
                <Navbar>
                    <People/>

                </Navbar>
            </div>
        </div>
    );
}

export default App;
