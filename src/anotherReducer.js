import {
  COUNTER_INCREMENT_ANOTHER,
  COUNTER_DECREMENT_ANOTHER,
} from './constants';

const counterInitialState = {
  secondCounter: 0,
  randomCounter: 12, 
};

function anotherCounterReducer (state = counterInitialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT_ANOTHER:
      console.log('state in anotherCounterReducer:', state);
      return Object.assign({}, state, { secondCounter: ++state.secondCounter, randomCounter: Math.round(Math.random() * 10) });
    case COUNTER_DECREMENT_ANOTHER:
      console.log('state in anotherCounterReducer:', state);
      return Object.assign({}, state, { secondCounter: --state.secondCounter, randomCounter: Math.round(Math.random() * 10) });
    default:
      return state;
  }
}

export default anotherCounterReducer;
