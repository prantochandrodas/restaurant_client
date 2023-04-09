import React from 'react';

const Food = ({ meal }) => {
    return (
        <div className='my-4'>
            <a href="#" class="group relative block bg-black">
                <img
                    alt="Developer"
                    src={meal.strMealThumb}
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        {meal.strMeal}
                    </p>

                    <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            class="lg:translate-y-8 transform  transition-all lg:translate-y-0 lg:opacity-100"
                        >
                            <p class="text-sm text-white">
                                {meal.strInstructions.slice(0,200)}...
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    );
};

export default Food;