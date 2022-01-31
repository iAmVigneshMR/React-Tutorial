// import { useDispatch, useSelector } from 'react-redux'; 
// import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch(); //to dispatch an action
//   const counter = useSelector(state => state.counter); //useSelecor hook allows us to select a part of state managed by store
//   const show = useSelector(state => state.showCounter);

//   const increamentHandler = () => {
//     dispatch({ type: 'increament'});
//   }

//   const decrementHandler = () => {
//     dispatch( {type: 'decrement'});
//   }
  
//   const increaseHandler = () => {
//     dispatch( {type: 'increase', amount: 5});
//   }

//   const toggleCounterHandler = () => {
//     dispatch( {type: 'toggle'});
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={increamentHandler}>Increament</button>
//         <button onClick={increaseHandler}>Increament by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;






// ------------------readux - toolkit-----------------------
import { useDispatch, useSelector } from 'react-redux'; 
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); //to dispatch an action
  const counter = useSelector(state => state.counter.counter); //useSelecor hook allows us to select a part of state managed by store
  const show = useSelector(state => state.counter.showCounter);

  const increamentHandler = () => {
    dispatch( counterActions.increament() );
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseHandler}>Increament by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;







//------------class based component----------------

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import classes from './Counter.module.css';

// class Counter extends Component {
//   increamentHandler(){
//     this.props.increament();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){}

//   render() {
//     return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.increamentHandler.bind(this)}>Increament</button>
//             <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         </main>
//   );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     increament: () => dispatch({type: 'increament'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); //connect is Ho=iher order component