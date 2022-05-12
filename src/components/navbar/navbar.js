import React from 'react';
import './navbar.scss'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Menu from "../menu/menu";


function Navbar(props) {
    return (
        <HashRouter>
            <header className="nav_header">
                <h1 className="h1">Star Wars</h1>
                <ul className="ul">
                    <li >
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link className="link" to="/people">People</Link>
                    </li>
                    <li>
                        <Link className="link" to="./vehicles">vehicles</Link>
                    </li>
                </ul>
            </header>
        </HashRouter>
    );

}

export default Navbar;