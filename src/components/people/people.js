import React,{useState, useEffect} from 'react';
import "./people.scss"
import App from '../../App'

function People(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function people() {
            let people = await fetch('https://swapi.dev/api/people/');
            let api = await people.json();
            setPeople(api.results);
        }
        people()
    },
        [])
    return (
        <div>
            <div className="container vehicle-text">People</div>
            <div className="vehicle-div">
                {people.map((people, index) => {
                    return (
                        <ul className="vehicle">
                            <h1 className="h1-vehicles">name</h1>
                            <li className="li-text" key={index}>{people.name}</li>
                            <h2 className="h2-vehicles">height</h2>
                            <li className="li-text" key={index}>{people.height}</li>
                            <h2 className="h2-vehicles">mass</h2>
                            <li className="li-text" key={index}>{people.mass}</li>
                            <h2 className="h2-vehicles">gender</h2>
                            <li className="li-text" key={index}>{people.gender}</li>
                            <h2 className="h2-vehicles">birth year</h2>
                            <li className="li-text" key={index}>{people.birth_year}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default People;