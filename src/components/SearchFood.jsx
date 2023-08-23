import { Divider, Input } from "antd";
import { useState } from "react";

function SearchFood(props) {

    const [name, setName] = useState("");

    const searchForIt = (e) => {
        setName(e.target.value)
        props.searchFood(e.target.value)
    }

    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>

        <Input name="search" value={name} type="text" onChange={searchForIt} />
      </>
    );
  }

  export default SearchFood;