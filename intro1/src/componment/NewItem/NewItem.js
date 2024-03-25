import React, { useState }  from "react";
import "./NewItem.css";

const NewItem = props => {
const [input, setinput ] = useState('');

const additemHandler = event =>{
    event.preventDefault();
    //console.log("hrtr")
    

const newitem = {
    id: Math.random().toString(),
    text: input
};

   setinput('')

  props.onAddGoal(newitem);

};

const textchangeHandler = event => {
    setinput(event.target.value);
}


 return (
 <form className="new-item" onSubmit={additemHandler}>
    <input type="text" value={input} onChange={textchangeHandler}/>
    <button type="submit">Add goal</button>
 </form>
 );

};


export default NewItem; 