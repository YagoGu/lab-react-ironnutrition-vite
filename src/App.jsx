import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json"
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const filteredFood = foods.filter((food) => {
      return food.id !==id
    })
    setFoods(filteredFood)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => <FoodBox key={food.id} food={food} deleteFood={deleteFood}/> )}
    </div>
  );
}

export default App;
