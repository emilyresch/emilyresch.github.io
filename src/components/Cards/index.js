import React from "react";
import readmePic from "../../images/readmepicture.png"
import notetakerPic from "../../images/notetaker.png"

function Cards() {
    return(
<div class="row">
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src="https://sourcery.ai/static/8bd4114da4db25ae197f53bad36c7c36/12609/code.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Code Refactor</h5>
                        <p class="card-text">Given code that I refactored.</p>
                        <a href="https://emilyresch.github.io/resch_homework_1/" class="btn">See it!</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fakebeers-1563897135.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">To Beer Or Not To Beer</h5>
                        <p class="card-text">Calling all craft-beer lovers! Use this app to find the perfect brew to enjoy. This is the first group project I worked on in bootcamp.</p>
                        <a href="https://pyhurst.github.io/Project_1_Brew/" class="btn">See it!</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src="https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7.fit_scale.size_2698x1517.v1569489914.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Password Generator</h5>
                        <p class="card-text">This app will help you find a secure new password.</p>
                        <a href="https://emilyresch.github.io/resch_homework_3/" class="btn">See it!</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src="https://66.media.tumblr.com/tumblr_lz8hw14V2C1r5mnvxo4_250.gif" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Eat-Da-Burger</h5>
                        <p class="card-text">Craving a burger? Use this app to devour any burger you desire!</p>
                        <a href="https://guarded-coast-61271.herokuapp.com/" class="btn">See it!</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src={readmePic} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">README Generator</h5>
                        <p class="card-text">Hate writing your readme's from scratch? This handy Node JS app places your project details into a pre-made template.</p>
                        <a href="" class="btn">See it!</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-4">
                <div data-aos="fade-up">
                <div class="card" style={{width: "100%"}}>
                    <img src={notetakerPic} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Note Taker</h5>
                        <p class="card-text">In this app, I connected the front and back ends to allow users to take, keep track of, and delete notes.</p>
                        <a href="https://calm-dawn-12572.herokuapp.com/" class="btn">See it!</a>
                    </div>
                </div>
            </div>
            </div>

        </div>

    )
}

export default Cards;