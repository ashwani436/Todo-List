import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App=()=>{
  
const[inputList,setInputList]=useState("");
const[Items,setItem]=useState([]);



const itemEvent=(event)=>{
      setInputList(event.target.value);
}
const listofitem=()=>{
        setItem((oldItems)=>{
                   return [...oldItems,inputList];

        })
};
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Todo List</h1>
        <input type='text' placeholder="Add a item" onChange={itemEvent}/>
        <button onClick={listofitem}> + </button>

        <ol>
          {/*<li>{inputList}</li>*/}
          {Items.map((value)=>{
              return <li>{value}</li>;
          })}
        </ol>
      </div>
      
    </div>
  );
}

export default App;
