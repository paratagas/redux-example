import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import anotherCounterReducer from './anotherReducer';
import reducerWithPayload from './reducerWithPayload';

export default createStore(
	combineReducers({
		counter: counterReducer,
		counterAnother: anotherCounterReducer,
		payload: reducerWithPayload,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);