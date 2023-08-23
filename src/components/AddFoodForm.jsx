// Your code here
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    function resetInputs(){
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    const handleSubmit = (e) => {
        // I don't want the page to reload
        e.preventDefault();
        
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        console.log(newFood);
        // I want to change the array of movies that it's in the parent component
        // in the props I have access to the createMovie function
        props.createFood(newFood);
        // when we create the new movie we set al the values to the initial ones
        resetInputs();
    }

    return (
        <div>
            <form>
                <Divider>Add Food Entry</Divider>
                
                <label>Name: </label>
                <Input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                />

                <label>Image: </label>
                <Input
                type="text"
                name="image"
                onChange={(event) => setImage(event.target.value)}
                value={image}
                />

                <label>Calories: </label>
                <Input
                type="number"
                name="calories"
                onChange={(event) => setCalories(event.target.value)}
                value={calories}
                />

                <label>Servings: </label>
                <Input
                type="number"
                name="servings"
                onChange={(event) => setServings(event.target.value)}
                value={servings}
                />

                <Button onClick={(e) => handleSubmit(e)} type="submit">Add a Food</Button>
            </form>
        </div>
    )
}

export default AddFoodForm;