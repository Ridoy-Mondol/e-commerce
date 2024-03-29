import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Api from "./Api";
const Brands = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 992 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 991, min: 768 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        },
      };  
  return (
    <div className='trusted-div'>
          <h3 className='check-now text-center pt-3 trust-heading'>Trusted By Many Companies</h3>
    <div className='brand-div' id='brand'>  
       <Carousel
      className="testimonial-carousel-brand"
    //   showDots={true}
      responsive={responsive}
      infinite={true}
      // autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={props.deviceType}
      dotListClass="react-multi-carousel-dot-list"
      itemClass="carousel-item-padding-40-px"
      >
        {
            Api.map((val,index)=> {
                return (
                   <div key={index} className='brand'>
                      <img src={val.img} alt='brands'className='brand-img'/>
                   </div>
                )
            })
        }
      </Carousel>
    </div>
    </div>
  )
}

export default Brands
