import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/AuthContext';

const emailReducer = (state, action) => {
  if(action.type === "user_input"){
    return {value : action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'input_blur'){
    return {value : state.value, isValid: state.value.includes('@')};
  }
  return {value : '', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === "user_input"){
    return {value : action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'input_blur'){
    return {value : state.value, isValid: state.value.trim().length > 6};
  }
  return {value : '', isValid: false};
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value : '', 
    isValid: false
  });
  
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value : '', 
    isValid: false
  });
  
  const authCtx = useContext(AuthContext);
  
  useEffect(() => {
    console.log("passwor mounting")
    return () => {
      console.log("passwor unmounting")
    }
  }, []);

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("mounting");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    
    return () => {
        console.log("unmounting")
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid])
  
    
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: "user_input", val: event.target.value})
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'user_input', val: event.target.value});
    // dispatchPassword(event.target.value);

    // setFormIsValid(
    //   emailState.isValid && emailState.value.trim().length > 6 
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({type: 'input_blur'});
  };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };
  
  const validatePasswordHandler = () => {
    dispatchPassword({type: 'input_blur'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
