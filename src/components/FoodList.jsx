import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm"
import foodsJson from "./../foods.json"
import SearchFood from "./SearchFood"
import { useState } from 'react';

function FoodList() {

    const [foods, setFoods] = useState(foodsJson);
    const [updatedFoods, setupdatedFoods] = useState(foodsJson);

    const deleteFood = (id) => {
      const filteredFood = foods.filter((food) => {
        return food.id !==id
      })
      setFoods(filteredFood)
      setupdatedFoods(filteredFood)
    }
  
    const createFood = (newFood) => {
      const moreFood = [newFood, ... foods]
      setFoods(moreFood)
      setupdatedFoods(moreFood)
    }

    const searchFood = (foodName) => {
      const searchedFood = updatedFoods.filter((food) => {
        return food.name.match(foodName)
      })
      setFoods(searchedFood)
    }

    return (
        <>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm key="id" createFood={createFood}/>
            <SearchFood key="id" searchFood={searchFood}/>
            {foods.map((food) => <FoodBox key={food.id} food={food} deleteFood={deleteFood}/> )}
        </>
    )
}

export default FoodList;