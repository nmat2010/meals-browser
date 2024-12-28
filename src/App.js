import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MealCard from './MealCard';

const App = () => {

    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // create the search engine, the title will be searched in the API
    const searchFood = async(title) => { // async = asynchronouse with the searching
        // fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. If it fails, the promise is rejected
        // await pauses the execution of its surrounding async funtion until the value is fulfilled, that is when the Response object returns
       const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
        );
        // the Response object is a generic placeholder. response.json() allows a JSON object to be extracted from the response. The method returns a promise, so you have to wait.
        const data = await response.json();
        setMeals(Array.isArray(data.meals) ? data.meals : []);
    }
    // useEffect() is a hook that lets you synchronize a component with an external system
    useEffect( () => {
        searchFood('Chicken');
    }, [])
    useEffect(() => {
        console.log("Updated meals:", meals);
    }, [meals]);
    
    return (
        <div className='App'>
            <h1>Meals Browser</h1>
            <div className='search'>
                <input
                    placeholder='Search for meals...'
                    value={searchTerm}   
                    onChange={(e) => setSearchTerm(e.target.value)} // use to change the default value
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchFood(searchTerm)} // search if the search icon is clicked
                />
             </div>

            {meals.length > 0 ? (
                    <div className='container'>
                        {meals.map((meal) => (
                            <MealCard meal={meal}/>
                        ) )}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No meals found!</h2>
                    </div>
                )}
            <p>API Used: <a className='api' href="https://www.themealdb.com/">TheMealDB API</a></p>
            <p>Copyright © 2024 Thu Nguyen. All Rights Reserved</p>
        </div>
    );
}

export default App;