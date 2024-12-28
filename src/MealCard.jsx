import React from 'react';

const MealCard = ({meal}) => {
    return (
        <div className='meal'>
        <div>
            <p>{meal.strMeal}</p>
        </div>
        <div>
            <a href={meal.strYoutube}>
                <img
                    src={meal.strMealThumb !== 'N/A' ? meal.strMealThumb : 
                    "https://via.placeholder.com/400"}
                    alt={meal.strMeal}
                />
            </a>
        </div>
        <div>
            <span>{meal.strArea}</span>
            <h3>{meal.strMeal}</h3>
        </div>
    </div>
    )
}

export default MealCard;