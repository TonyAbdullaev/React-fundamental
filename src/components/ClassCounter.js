import React from 'react';
import MyButton from "./UI/button/MyButton";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment =this.increment.bind(this);
        this.decrement =this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1})
    };

    decrement() {
        this.setState({count: this.state.count - 1})
    };

    render() {
        return (
            <>
                <h2>Class component: {this.state.count}</h2>
                <MyButton onClick={this.increment}>Increment</MyButton>
                <MyButton onClick={this.decrement}>Decrement</MyButton>
            </>
        )
    }
}

export default ClassCounter;