import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorMoal from '../UI/ErrorModal';
import classes from "./AddUSer.module.css";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : "Invalid Input",
                message: "Please enter a valid Name and Age"
            });
        }
        if(+enteredAge < 1){
            setError({
                title : "Invalid Age",
                message: "Please enter a valid Age"
            });
        }
        props.onAddUser(enteredUserName, enteredAge)
        // console.log(enteredAge, enteredUserName);
        setEnteredAge("");
        setEnteredUserName("");
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHanler =() => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorMoal title={error.title} message={error.message} onConfirm={errorHanler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser
