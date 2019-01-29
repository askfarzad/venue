import React from 'react';
import Slider from 'react-slick';

import '../../../../node_modules/react-slick/dist/';

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import slide_one from '../../images/slide_one.jpg';
import slide_two from '../../images/slide_two.jpg';
import slide_three from '../../images/slide_three.jpg';

const Carrousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                background: 'red',
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div
                    className="carrousel_image"
                    style={{
                        background: `url(${slide_one})`,
                        // height:'550px'
                    }}
                ></div>
                <div>Image 2</div>
                <div>Image 3</div>
            </Slider>
        </div>
    );
};

export default Carrousel;