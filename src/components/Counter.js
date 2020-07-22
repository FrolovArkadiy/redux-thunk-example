import React from 'react';
import { connect } from 'react-redux';

function Counter({counter}) {
    return (
        <div>Counter: {counter}</div>
    )
}

const mapStateToProps = (state) => {
    console.warn('Connect', state)
    return {
        counter: state.c.count
    }
};

Counter = connect(mapStateToProps, null)(Counter)

export default Counter;