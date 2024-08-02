import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import slider1 from './slider1.png'
// import slider2 from './slider2.png'
// import slider3 from './slider3.png'



function SliderSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 969,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings} >
        <div className='slidersec'>
          <img src="https://lirp.cdn-website.com/48f148a6/dms3rep/multi/opt/10-1920w.png" alt="" />
          {/* <div className="slidercontent"> */}
          {/* <div className='slidercontentadjust'> */}
          {/* 
              <h1>Kids Gold Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button> */}
          {/* </div> */}

          {/* </div> */}

        </div>
        <div className='slidersec'>
          <img src="https://lirp.cdn-website.com/48f148a6/dms3rep/multi/opt/11-1920w.png" alt="" />
          {/* <div className="slidercontent">
            <div className='slidercontentadjust'>

              <h1>Kids Diamond Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button>
            </div>

          </div> */}

        </div>

        <div className='slidersec'>
          <img src="https://lirp.cdn-website.com/48f148a6/dms3rep/multi/opt/13-1920w.png" alt="" />
          {/* <div className="slidercontent">
            <div className='slidercontentadjust'>

              <h1>Kids Gold Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button>
            </div>
          </div> */}

        </div>

        <div className='slidersec'>
          <img src={slider1} alt="" className='object-fill' />
          {/* <div className="slidercontent">
            <div className='slidercontentadjust'>

              <h1>Kids Gold Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button>
            </div> */}

          {/* </div> */}

        </div>
        {/* <div className='slidersec'>
        <img src={slider3} alt="" className='object-fill'/>

          {/* <div className="slidercontent">
            <div className='slidercontentadjust'>

              <h1>Kids Gold Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button>
            </div>

          </div> */}

        {/* </div> */}
        <div className='slidersec'>
          <img src="https://lirp.cdn-website.com/48f148a6/dms3rep/multi/opt/Desktop+-+7-1920w.jpg" alt="" />
          {/* <div className="slidercontent">
            <div className='slidercontentadjust'>

              <h1>Kids Gold Jewellery</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores hic eum sit quos veniam! Culpa dignissimos rerum assumenda sequi placeat aperiam ducimus dolores ipsa dolor, vel maiores magnam deserunt repellat.</p>
              <button>Shop Now</button>
            </div>
          </div> */}

        </div>
      </Slider>

    </>
  )
}

export default SliderSection
