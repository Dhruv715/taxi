import React from "react";
import Slider from "react-slick";

function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,


    };

    return (
        <div className="slider-container overflow-hidden" style={{height:'60vh',objectFit:'cover'}}>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://www.rstravelindia.com/blog/wp-content/uploads/2023/01/car-rental_bnr-1.jpg"
                        class="img-fluid rounded-top semiimg"
                        alt=""

                    />

                </div>
              
                <div>
                    <img
                        src="https://tadtoper.com/wp-content/uploads/2020/01/car-rentals.jpg"
                        class="img-fluid rounded-top semiimg"
                        alt=""
                    
                    />
                    
                </div>
                <div>
                    <img
                        src="https://www.udaipurtaxicabservice.com/Photos/udaipur-taxi-cab-service-car-rental-service.png"
                        class="img-fluid rounded-top semiimg"
                        alt=""

                    />
                </div>
               
            </Slider>
        </div>
    );
}

export default Sliders;
