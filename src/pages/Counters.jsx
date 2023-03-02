import React from 'react';
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import ControlledInput from "../components/ControlledInput";

const Counters = () => {
    return (
        <div style={{width: "100%"}}>
            <Counter />
            <ClassCounter />
            <ControlledInput />
        </div>
    );
};

export default Counters;