import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {

    const meal = props.meal;

    const { idMeal, strMeal, strMealThumb } = meal;

    return (
        <div className="col-md-3 mb-5">
            <div className="rounded shadow p-3 h-100">
                <img className="img-fluid" src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <Link to={`/details/${idMeal}`}><button className="btn btn-primary">See Details</button></Link>
            </div>
        </div>
    );
};

export default Meal;