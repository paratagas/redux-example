import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_ANOTHER,
  COUNTER_DECREMENT_ANOTHER,
  DELIVER_PAYLOAD,
  CLEAR_PAYLOAD,
} from './constants';

// Action Creators
export function incrementCounter () {
  return {
    type: COUNTER_INCREMENT
  };
}

export function decrementCounter () {
  return {
    type: COUNTER_DECREMENT
  };
}

export function incrementCounterAnother () {
  return {
    type: COUNTER_INCREMENT_ANOTHER
  };
}

export function decrementCounterAnother () {
  return {
    type: COUNTER_DECREMENT_ANOTHER
  };
}

export function deliverPayload (value) {
  return {
    type: DELIVER_PAYLOAD,
    data: value,
  };
}

export function clearPayload (value) {
  return {
    type: CLEAR_PAYLOAD,
    data: value,
  };
}