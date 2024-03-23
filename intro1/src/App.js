import React, { useState } from "react";

import GoalList from "./componment/GoalList/GoalList";
import NewItem from  "./componment/NewItem/NewItem";
import './App.css';

const App = ()=>{
 const [courseGoals, setcourseGoals] = useState ([
    {id:'cg1', text:'Finish the course'},
    {id:'cg2', text:'Learn all about the course main topic'},
    {id:'cg3', text:'Help other students in the course Q&A'},
    
  ]);

   const additemHandler = newitew => {
    setcourseGoals(courseGoals.concat(newitew));
   }
   
  return <div className="course-goal">
   <h2>course Goals</h2>

   <NewItem onAddGoal={additemHandler}/>
  <GoalList goals={courseGoals}/>
  </div>
};



export default App;
