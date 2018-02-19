import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { increment, decrement } from './ducks/counter';

class App extends Component {
  render() {

    let { value, increment, decrement } = this.props;


    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ value }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}



function mapStateToProps(state) {
  if(!state) {
    return {}

  }

  return{

    value: state.value
    // state is being passed in as the updated state from the store

  }

}



let actions = {

  increment: increment,
  decrement: decrement

}

let connected = connect(mapStateToProps, actions);
export default connected(App);

// Redux is like a DVD player
// Your app is like a TV
// Connect is like the cables that connect your DVD player to your TV