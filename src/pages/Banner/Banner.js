import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero lg:w-[50%] lg:mx-40 sm:mx-4 lg:py-24 w-[90%] text-white">
            <div className="hero-content align-left">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="text-6xl font-bold">Delicious Recipes</h1>
                    <p className="py-6 text-lg">Inappropriate behavior is often laughed off as 'boys will <span className='lg:inline hidden'><br /></span> be boys' woman  face higher conduct standards especially in <br /> the workplace .That's why it's crucial that as woman.</p>
                    <Link to='/meals' class="rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[10px] text-white focus:outline-none focus:ring active:text-opacity-75">Meals</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;