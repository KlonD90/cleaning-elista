import React from 'react';
import ReactDOM from 'react-dom';
import {Title} from "../components/Title";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";



export default () => {
    return <div>
        <Title> 
        Cleaner log in:
        </Title>
        <div className="Email">
            <input type="text" name="name" placeholder="Email:" />
        </div>
        <div className="password">
            <input type="text" name="name" placeholder="Password:" />
        </div>

        <div> <p> <NavLink to="/cleanerorders"> Log in</NavLink> </p> </div>
        <div> <p> <NavLink to="/pageslogincleaner"> New password on Email</NavLink> </p> </div>
        </div>
        
}