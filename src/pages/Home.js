import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return(
        <section class="section1">
        <div class="row-lg row1">
            <div class="home-items">
                <Link to="/about" id="aboutme" className="nav-link home-links">About Emily</Link>
                    {/* <a class="nav-link home-links" href="aboutme.html">About Emily</a> */}
                <Link to ="/projects" id="projects" className="nav-link home-links">Projects</Link>
                    {/* <a class="nav-link home-links" href="projects.html">Projects</a> */}
                <Link to="/resume" id="resume" className="nav-link home-links">Resume</Link>
                    {/* <a class="nav-link home-links" target="_blank" href="./images/Resch Resume 2020 new.pdf">Resume</a> */}
                <a class="nav-link home-links"  rel="noopener noreferrer" href="mailto:eresch527@gmail.com">Contact Me</a>
            </div>
        </div>
        <img class="image-appear" />
    </section>
    )
}

export default Home;