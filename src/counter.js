import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  incrementCounter,
  decrementCounter
} from './actions';

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

class Counter extends Component {
  render () {
  	// const { counter } = this.props.counter;
  	const { counter } = this.props;
  	// console.log('counter:', counter);

    return (
      <div>
	      <div className="Counter">
	        <span>Counter another: {counter}</span>
	      </div>
	      <button onClick={this.props.increment}>Increment</button>
	      <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);