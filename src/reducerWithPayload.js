import {
  DELIVER_PAYLOAD,
  CLEAR_PAYLOAD,
} from './constants';

const initialState = {
  name: 'No name',
  year: 1970,
};

function reducerWithPayload (state = initialState, action) {
  // console.log('action in reducerWithPayload:', action);
  switch (action.type) {
    case DELIVER_PAYLOAD:
      return {...state, ...action.data};
    case CLEAR_PAYLOAD:
      return {...initialState};
    default:
      return state;
  }
}

export default reducerWithPayload;
