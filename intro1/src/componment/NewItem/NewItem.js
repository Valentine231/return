import React  from "react";

import "./NewItem.css";

const NewItem = props => {

const additemHandler = event =>{
    event.preventDefault();
    console.log("hrtr")
    props.onAddGoal(newitem);  
}

const newitem = {
    id: Math.random().toString(),
    text: "my new goal"
};

 return <form className="new-item" onSubmit={additemHandler}>
    <input type="text"/>  
    <button type="submit">Add goal</button>
 </form>
};


export default NewItem;