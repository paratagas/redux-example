import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deliverPayload,
  clearPayload,
} from './actions';

const mapStateToProps = state => ({
  componentPayload: state.payload,
});

const mapDispatchToProps = dispatch => ({
  deliverPayload: (value) => dispatch(deliverPayload(value)),
  clearPayload: () => dispatch(clearPayload()),
});

class Payload extends Component {
  render () {
    const stub = {
      name: 'John Doe',
      year: 1994,
    };
    
    console.log('this.props.componentPayload:', this.props.componentPayload);
    const { name, year } = this.props.componentPayload;

    return (
      <div className="Payload">
	      <div className="Info">
          <br />
          <span>Name: {name}</span>
          <br />
          <span>Year: {year}</span>
	      </div>
        <button onClick={() => this.props.deliverPayload(stub)}>Get payload</button>
	      <button onClick={this.props.clearPayload}>Clear payload</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payload);