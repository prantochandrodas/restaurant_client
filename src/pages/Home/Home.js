import React from 'react';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import Photos from '../Photos/Photos';
import Events from '../Events/Events';
import Foods from '../../Foods/Foods';
import HomeMeal from './HomeMeal/HomeMeal';

const Home = () => {
    return (
        <div>
           <HomeBlogs></HomeBlogs> 
           <HomeMeal></HomeMeal>
           <Photos></Photos>
           <Events></Events>
        </div>
    );
};

export default Home;