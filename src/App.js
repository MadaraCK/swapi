import React, {useState, useEffect} from 'react';
import './App.scss'
import Planets from "./components/planets/planets";
import People from "./components/people/people";
import Navbar from "./components/navbar/navbar";
import Starwars from "./components/starwars/starwars";

import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    NavLink,
} from 'react-router-dom';
import Vehicles from "./components/Vehicles/vehicles";


function App(props) {


    return (
        <BrowserRouter>
            <div className="bgc">
                <div className="container">
                    <Navbar/>

                </div>
                    <Routes>
                        <Route element={<Starwars/>} path="/" exact/>
                        <Route element={<People/>} path="/people"/>
                        <Route element={<Planets/>} path="/planets"/>
                        <Route element={<Vehicles/>} path="/vehicles"/>
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
