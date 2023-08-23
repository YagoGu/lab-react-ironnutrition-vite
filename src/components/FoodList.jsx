import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm"
import foodsJson from "./../foods.json"
import { useState } from 'react';

function FoodList() {

    const [foods, setFoods] = useState(foodsJson);

    const deleteFood = (id) => {
      const filteredFood = foods.filter((food) => {
        return food.id !==id
      })
      setFoods(filteredFood)
    }
  
    const createFood = (newFood) => {
      const moreFood = [newFood, ... foods]
      setFoods(moreFood)
    }

    return (
        <>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm key="id" createFood={createFood}/>
            {foods.map((food) => <FoodBox key={food.id} food={food} deleteFood={deleteFood}/> )}
        </>
    )
}

export default FoodList;