// import { createStore } from 'redux';

// const intialState = {counter: 0, showCounter: true};

// const counterReducer = (state = intialState, action) => {
//     if(action.type === 'increament'){
//         return{
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
    
//     if(action.type === 'increase'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer); //create redux store

// export default store;







//---------------using redux toolkit--------------------------

// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const intialCounterState = {counter: 0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: intialCounterState,
//     reducers:{
//         increament(state){
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         increase(state, action){
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state){
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const initialAuthState ={ 
//     isAuthencated: false
// }

// const authSlice = createSlice({
//     name:'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state){
//             state.isAuthencated = true;
//         },
//         logout(state){
//             state.isAuthencated = false;
//         }
//     }
// })

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         auth: authSlice.reducer
//     }
// }); //create redux store

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;






// ---------------------separate redux files ---------------

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
}); //create redux store

export default store;