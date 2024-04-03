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
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://wallpaper.dog/large/10818222.jpg"
                        class="img-fluid rounded-top semiimg"
                        alt=""

                    />

                </div>
              
                <div>
                    <img
                        src="https://cdn.luxatic.com/wp-content/uploads/2022/02/Mercedes-AMG-GT.jpg"
                        class="img-fluid rounded-top semiimg"
                        alt=""
                    
                    />
                    
                </div>
                <div>
                    <img
                        src="https://www.hagerty.co.uk/wp-content/uploads/2022/10/MG_7247-scaled-e1664899576607.jpg"
                        class="img-fluid rounded-top semiimg"
                        alt=""

                    />
                </div>
               
            </Slider>
        </div>
    );
}

export default Sliders;
