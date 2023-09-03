import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return <nav>
        <ul>
            <li><NavLink to="/" activeClassName={"active"}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName={"active"}>About</NavLink></li>
            <li><NavLink to="/contact" activeClassName={"active"}>Contact</NavLink></li>
            <li><NavLink to="/blog" activeClassName={"active"}>Blog</NavLink></li>
        </ul>
    </nav>;
}