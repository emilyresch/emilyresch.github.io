import React from "react";
import Cards from "../Cards"

function CardContainer() {
    return (
        <main className="project-cards">
            <div className="row title">
                <div data-aos="fade-up">
                    <h3>Some of my projects...</h3>
                </div>
            </div>
            <Cards />
        </main>
    )
}

export default CardContainer;