import React from "react";
import Carousel from "../components/Carousel"

function About() {
    return(
        <div class="row">
        <div class="col-6 bio-column">
        <h3>Bio</h3>
        <p> My name is <strong>Emily</strong> and I'm an aspiring web developer. I earned my Bachelor's
            Degree in 2017 for
            Animation and Illustration from DePaul University.
            In the fall of 2019, I decided to return to school to pursue a Master's Degree in Human-Computer
            interaction. After taking a few intro coding
            courses for the degree, I found that I truly enjoyed coding more than anything I had done before
            in school.
            In March of 2020, I put my degree on hold to take the coding bootcamp course that Northwestern
            offers to up my employment game and jumpstart a career
            in development.</p>
        
        <p>I've had the opportunity to live abroad twice with my family and travel a good chunk of the globe
            with
            them (and through some study-abroad programs).
            My favorite places I have traveled so far are Japan or South Africa. Thanks to my
            mom's side of the family, I am also fluent in French.
            In my free time, I like to draw, watch Netflix, sail, homebrew, kickbox, and cook new recipes I
            find on the internet.
            <em>Thank you for stopping by my website!</em>
        </p>
        </div>
        <Carousel />
        </div>
    )
}

export default About;