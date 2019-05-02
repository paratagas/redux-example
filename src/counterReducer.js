import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from './constants';

const counter = 0;

function counterReducer (state = counter, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      console.log('state in counterReducer:', state);
      return state += 1;
    case COUNTER_DECREMENT:
      console.log('state in counterReducer:', state);
      return state -= 1;
    default:
      return state;
  }
}

export default counterReducer;
