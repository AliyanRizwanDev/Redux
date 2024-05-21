import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)
  const dispatch =  useDispatch();
  const add  = () =>{
    dispatch({
      type: "Add"
    });
    console.log(counter)
  }
  const sub  = () =>{
    dispatch({
      type: "Sub"
    });
  }
  const addby5  = () =>{
    dispatch({
      type: "Addby5" , amount: 5
    });
    console.log(counter)
  }
  const toggle  = () =>{
    dispatch({
      type: "toggle"
    });
    console.log(counter)
  }

  return (
    <div className='App'>
      {showCounter ?<h1>{counter}</h1>:""}
      <button onClick={add} >Add</button>
      <button onClick={sub} >Sub</button>
      <button onClick={addby5} >Add by 5</button>
      <button onClick={toggle} >Show/Hide</button>

    </div>
  )
}
