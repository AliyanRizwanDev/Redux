import {createStore} from 'redux'

const reducer = (state = {counter : 0,showCounter:true}, action) => {
    if (action.type === "Add") {

        return { 
            counter : state.counter + 1,
            showCounter: state.showCounter

        };

    }
    if (action.type === "Sub") {
        
        return { 
            counter : state.counter - 1,
            showCounter: state.showCounter

        };

    }

    if (action.type === "Addby5") {
        
        return { 
            counter : state.counter + action.amount,
            showCounter: state.showCounter

        };

    }
    if (action.type === "toggle") {
        
        return { 
            counter : state.counter,
            showCounter: !state.showCounter

        };

    }
    return state;
}

const store = createStore(reducer);

export default store;   
