import React from "react";
import Emily1 from "../../images/IMG_1585.jpeg";
import Emily2 from "../../images/IMG_6216.jpeg";
import Emily3 from "../../images/OUTJ0633.jpeg";
import Emily4 from "../../images/96B286B8-86E2-42A7-8A21-14F94AA895D0.jpeg";



function Carousel() {
    return(
        <div className="col-6 img-column">

            <h3>“Well-behaved women seldom make history.”</h3>
            <h4>-Laurel Thatcher Ulrich</h4>

        <div data-aos="fade-up">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img-grey" src={Emily1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Emily2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Emily3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Emily4} alt="Fourth slide" />
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Carousel;