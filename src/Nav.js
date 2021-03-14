import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {

    const navStyle = {
        color: "white",
        textDecoration: "none"
    };

    return (
        <nav>
            <Link style={ navStyle } to="/">
                <h3>Logo</h3>
            </Link>
            <ul>
                <Link style={ navStyle } to="/About">
                    <li className="nav-links">About</li>
                </Link>
                <Link style={ navStyle } to="/Shop">
                    <li className="nav-links">Shop</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;