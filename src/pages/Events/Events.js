import React from 'react';
import bannerImage from '../assets/image_new.png'
const Events = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" style={{ backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className='lg:mt-10 mt-4'>
            <div className='lg:px-20 px-5 lg:py-20 py-10'>
                <h1  className='text-4xl text-center lg:py-8' style={{color:'#F8D675'}}>Events</h1>
                <p className='text-lg lg:text-center text-white'>Looking to host an unforgettable event? Storyville has the perfect space for any occasion. Choose from our luxurious main dining room, the sultry Lulu’s speakeasy, or even our picturesque patio during summer months. Our dedicated party planner helps create the ultimate celebration tailored to your personal tastes and desires. Whether you select from our wide range of party packages or design your own unique experience, there’s no better place to make memories that will last a lifetime.</p>
            </div>
        </div>
    );
};

export default Events;