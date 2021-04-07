import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className="container">
            <h3 className="text-center">Meal Market</h3>
            <h4 className="text-center">Choose your dish </h4>

            <div className="row">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Home;