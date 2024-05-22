import { configureStore, createSlice } from '@reduxjs/toolkit';
import {createStore} from 'redux'

const initialState = {counter : 0,showCounter:true};

const counterSlice = createSlice({
    name:"counter",
    initialState : initialState,
    reducers:{
        add(state){
            state.counter++;
        },
        sub(state){
            state.counter--;
        },
        addby5(state,action){ 
            state.counter = state.counter + action.payload //In this toolkit define its own type name and for value there is a payload which is fixed 
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }

    }

})




const store = configureStore(
    {
        reducer: counterSlice.reducer
        // if you have more slice then you can pass an object like
        // reducer: {
        //     slice1 : counterSlice.reducer,
        //     slice2 : updatingSlice.reducer,
        //     slice3 : deletingSlice.reducer,
        // }
    }
)

export const counterActions = counterSlice.actions;


export default store;   

