import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    return (
    <div className="row-lg">
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">Home</Link>
            {/* <a className="navbar-brand" href="index.html">Home</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mynavlist" id="navbarNav">
                <ul className="navbar-nav mynavlist">
                    <li className="nav-item">
                    <a className="nav-link mynavs" target="_blank" rel="noopener noreferrer" href="https://github.com/emilyresch">My Github</a>
                        {/* <a className="nav-link mynavs" target="_blank" href="https://github.com/emilyresch">My GitHub</a> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mynavs" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emily-resch-65b68011b/">My LinkedIn</a>
                        {/* <a className="nav-link mynavs" target="_blank" href="https://www.linkedin.com/in/emily-resch-65b68011b/">My
                    LinkedIn</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;

