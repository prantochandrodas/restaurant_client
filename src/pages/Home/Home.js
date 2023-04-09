import React from 'react';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import Photos from '../Photos/Photos';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div>
           <HomeBlogs></HomeBlogs> 
           <Photos></Photos>
           <Events></Events>
        </div>
    );
};

export default Home;