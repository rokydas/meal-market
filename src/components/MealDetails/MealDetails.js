import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {

    const { id } = useParams();

    const [meal, setMeal] = useState({});

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = meal;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [])

    return (
        <div className="container">
            <div className="text-center">
                <img width="300px" src={strMealThumb} alt="" />
                {
                    strArea == "Portuguese" ? <h3>We are Portuguese</h3> : <h3>we are not Portuguese</h3>
                }
                <h3>Name: {strMeal}</h3>
                <h3>Category: {strCategory}</h3>
                <h4>Area: {strArea}</h4>
                <p>{strInstructions}</p>
            </div>

        </div>
    );
};

export default MealDetails;