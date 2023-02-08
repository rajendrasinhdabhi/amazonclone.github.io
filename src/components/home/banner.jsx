import React from 'react'
import Slider from "react-slick";
import img1 from "../../images/bannerimgOne.jpg"
import img2 from "../../images/bannerimgTwo.jpg"
import img3 from "../../images/bannerimgThree.jpg"
import img4 from "../../images/bannerimgFour.jpg"
import img5 from "../../images/bannerimgFive.jpg"
import { height } from '@mui/system';

const Banner = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

  return (
    <Slider {...settings} className="overflow-hidden
     ">
    <div>
      <img src={img1} />
    </div>
    <div>
    <img src={img2} />
    </div>
    <div>
    <img src={img3} />
    </div>
    <div>
    <img src={img4} />
    </div>
    <div>
    <img src={img5} />
    </div>
  
  </Slider>
  )
}

export default Banner
