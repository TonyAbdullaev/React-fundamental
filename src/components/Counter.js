import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";

const Counter = () => {
    const [counterValue, setCounterValue] =useState(0);
    return (
        <div>
            <h2>Func component: {counterValue}</h2>
            <MyButton onClick={() => setCounterValue(prevState => prevState + 1)}>Increment</MyButton>
            <MyButton onClick={() => setCounterValue(prevState => prevState - 1)}>Decrement</MyButton>
        </div>
    );
};

export default Counter;