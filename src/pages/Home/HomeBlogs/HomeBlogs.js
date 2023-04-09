import React from 'react';
import img from '../../assets/restruent/140435_168.jpg';
import img1 from '../../assets/restruent/kwee-zeen.jpg';
import img2 from '../../assets/restruent/urban-kitchen-buffet.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeBlogs.css';
const HomeBlogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <div className='lg:flex items-center justify-center lg:flex-row-reverse sm:flex sm:flex-col-reverse  lg:w-[80%] mx-auto lg:my-10 sm:my-4 '>
           
            <div data-aos="fade-left" data-aos-duration="1000" className='lg:w-9/12 flex flex-col items-center justify-center'>
                <h2 className='lg:text-4xl mt-4 text-2xl text-center lg:text-left font-semibold lg:px-4 px-4'>Welcome To Cooking Master</h2>
                    <p className='lg:text-left text-center lg:text-lg text-sm my-2 lg:mt-4 mt-2 lg:px-4 px-4'>Welcome to Cooking Master, Dhaka's premiere destination for elevated New Orleans-inspired cuisine, where every dish tells a tale of culinary magic unfolding right before your eyes. Nestled in the heart of the city, our restaurant offers an unforgettable dining experience that will transport you to the vibrant and flavorful world of the Big Easy.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="blog_carousel lg:w-8/12  lg:ml-5 lg:mr-5 ml-0 mr-0 rounded-sm align-middle">
            <Slider {...settings} className="blog_carousel">
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img} className="w-full" />
                </div>
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img1} className="w-full" />
                </div>
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img2} className="w-full" />
                </div>
             </Slider>
            </div>
        </div>
    );
};

export default HomeBlogs;