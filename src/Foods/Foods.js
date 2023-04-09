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
        <div className='lg:grid block lg:grid-cols-3 lg:gap-5 w-[95%] mx-auto'>
            {
                meals?.map(meal=><Food
                    key={meal.idMeal}
                    meal={meal}
                ></Food>)
            }
        </div>
    );
};

export default Foods;