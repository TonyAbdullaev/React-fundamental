import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";

const Counter = () => {
    const [counterValue, setCounterValue] =useState(0);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>Func component: {counterValue}</h2>
            <div>
                <MyButton onClick={() => setCounterValue(prevState => prevState + 1)}>Increment</MyButton>
                <MyButton onClick={() => setCounterValue(prevState => prevState - 1)}>Decrement</MyButton>
            </div>
        </div>
    );
};

export default Counter;