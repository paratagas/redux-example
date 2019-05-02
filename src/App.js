import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter';
import CounterAnother from './anotherCounter';
import Payload from './Payload';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Counter />
          <CounterAnother />
          <Payload />
        </div>
      </Provider>
    );
  }
}

export default App;
