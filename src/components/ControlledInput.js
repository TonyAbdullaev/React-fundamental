import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";

const ControlledInput = () => {
    const [inputVal, setInputVal] = useState('text...')

    return (
        <div>
            <h2>{inputVal ? inputVal : 'Empty...'}</h2>
            <MyInput
                type="text"
                placeholder="white smthing"
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
            />
        </div>
    );
};

export default ControlledInput;