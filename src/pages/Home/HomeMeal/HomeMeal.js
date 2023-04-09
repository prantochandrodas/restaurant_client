import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';
import { Link } from 'react-router-dom';

const HomeMeal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => {
                return res.json();
            })
            .then(data => setMeals(data.meals));
    }, [])
    return (
        <div>
            <h2 className='text-center text-2xl'>Meals</h2>
            <div className='lg:grid block lg:grid-cols-3 lg:gap-5 w-[95%] mx-auto'>
                {
                    meals?.slice(0, 6).map(meal => <Food
                        key={meal.idMeal}
                        meal={meal}
                    ></Food>)
                }
            </div>
            <div className='flex justify-center'>
            <Link to='/meals' class="rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[10px] text-white focus:outline-none focus:ring active:text-opacity-75">See More</Link>
            </div>
        </div>

    );
};

export default HomeMeal;