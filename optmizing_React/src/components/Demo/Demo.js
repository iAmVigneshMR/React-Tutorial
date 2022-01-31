import React, { useMemo } from 'react';
import classes from './Demo.module.css';

const Demo = (props) => {
    // console.log("demo running");

    const { items } = props;

    const sortedList = useMemo(() => {
        console.log('Items sorted');
        return items.sort((a, b) => a - b);
    }, [items]); 
    console.log('Demo RUNNING');
    
//   return <p>{props.show ? "This is new!" : ""}</p>;
    return (
        <div className={classes.list}>
        <h2>{props.title}</h2>
        <ul>
            {sortedList.map((item) => (
            <li key={item}>{item}</li>
            ))}
        </ul>
        </div>
    );
};

export default React.memo(Demo);
