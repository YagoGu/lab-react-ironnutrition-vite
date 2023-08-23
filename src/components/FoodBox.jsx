// Your code here
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox (props) {

    const dataFood = props.food;

    return (
         <Col>
            <Card title={dataFood.name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={dataFood.image} alt={dataFood.name} height={60}/>

                <p>Calories: {dataFood.calories}</p>
                <p>Servings: {dataFood.servings}</p>

                <p>
                    <b>Total Calories: {dataFood.servings} * {dataFood.calories} </b> kcal
                </p>

                <Button onClick={() => props.deleteFood(dataFood.id)}>Delete</Button>
            </Card>
        </Col>
    )
}

export default FoodBox;