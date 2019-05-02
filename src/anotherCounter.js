import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  incrementCounterAnother,
  decrementCounterAnother
} from './actions';

const mapStateToProps = state => ({
  counterAnother: state.counterAnother
});

const mapDispatchToProps = dispatch => ({
  incrementAnother: () => dispatch(incrementCounterAnother()),
  decrementAnother: () => dispatch(decrementCounterAnother())
});

class CounterAnother extends Component {
  render () {
    const { secondCounter, randomCounter } = this.props.counterAnother;
    // console.log('secondCounter in CounterAnother:', secondCounter);
    // console.log('randomCounter in CounterAnother:', randomCounter);

    return (
      <div className="CounterAnother">
	      <div className="counter">
          <br />
          <span>Counter another: {secondCounter}</span>
          <br />
          <span>Counter random: {randomCounter}</span>
	      </div>
	      <button onClick={this.props.incrementAnother}>Increment another</button>
	      <button onClick={this.props.decrementAnother}>Decrement another</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterAnother);