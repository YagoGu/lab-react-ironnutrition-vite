// Your code here

function FoodBox (props) {

    const dataFood = props.food;

    return (
         <div>
            <p>{dataFood.name}</p>
            <img src={dataFood.image} alt={dataFood.name} width="250px"/>

            <p>Calories: {dataFood.calories}</p>
            <p>Servings: {dataFood.servings}</p>

            <p>
                <b>Total Calories: {dataFood.servings} * {dataFood.calories} </b> kcal
            </p>

            <button onClick={() => props.deleteFood(dataFood.id)}>Delete</button>
        </div>
    )
}

export default FoodBox;