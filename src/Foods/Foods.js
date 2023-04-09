import React, { useEffect, useState } from 'react';
import Food from '../pages/Food/Food';
import Loading from '../pages/Loading/Loading';

const Foods = () => {
    const [loading,isLoading]=useState(false);
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        isLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setMeals(data.meals);
            isLoading(false);
        });
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-5 w-[95%] mx-auto'>
            {
                meals?.slice(0,24).map(meal=><Food
                    key={meal.idMeal}
                    meal={meal}
                ></Food>)
            }
        </div>
    );
};

export default Foods;