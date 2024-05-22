import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import {counterActions} from './redux/store'

export default function App() {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)
  const dispatch =  useDispatch();
  const add  = () =>{
    dispatch(counterActions.add());

    console.log(counter)
  }
  const sub  = () =>{
    dispatch(counterActions.sub());

  }
  const addby5  = () =>{
    dispatch(counterActions.addby5(5));

  }
  const toggle  = () =>{
    dispatch(counterActions.toggle());

  }

  return (
    <div className='App'>
      {showCounter?<h1>{counter}</h1>:""}
      <button onClick={add} >Add</button>
      <button onClick={sub} >Sub</button>
      <button onClick={addby5} >Add by 5</button>
      <button onClick={toggle} >Show/Hide</button>

    </div>
  )
}
