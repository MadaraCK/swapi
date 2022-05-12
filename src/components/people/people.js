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
    },
        [])
    return (
        <div className="container">People</div>
    );
}

export default People;