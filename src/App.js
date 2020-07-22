import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { incCount, decCount } from './actions';
import './App.css';
import Counter from "./components/Counter";

function App({counter, incCount, decCount}) {

  return (
    <div className="App">
      <div>
        Redux Theme
      </div>
        <Counter/>
        <button onClick={incCount}>INC</button><button onClick={decCount}>DEC</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
};

const mapDispatchToProps = {
        incCount: incCount,
        decCount: decCount,
    }
;

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
