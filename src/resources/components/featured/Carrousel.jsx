import React from "react";
import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import slide_one from "../../images/slide_one.jpg";
import slide_two from "../../images/slide_two.jpg";
import slide_three from "../../images/slide_three.jpg";

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500
        // slidesToShow: 1,
        // slidesToScroll: 1
    };
    return (
        <div
            className="carrousel_wrapper"
            style={{
                background: "green",
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            {/* <img src={slide_one} /> */}
            {console.log(`url(${slide_one})`)}
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: "1200px"
                        }}
                    />
                </div>
                <div>
                    {" "}
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: "1200px"
                        }}
                    />
                </div>
                <div>
                    {" "}
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: "1200px"
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
