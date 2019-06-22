//simport Store  from '../lib/store.js';
//import {createStore} from "../node_modules/redux/es/redux.js";
import debounce from '/lodash-es/debounce.js';
import rootReducer from './reducer.js';
import { loadState, saveState } from './localStorage.js'

/*
const init = () => {
	const persistedState = loadState();
	const store = new Store(rootReducer, persistedState);

	store.subscribe(debounce(() => {
		saveState(store.getState())
	}, 1000))


	const next = store.dispatch;
	store.dispatch = (action) => {
		console.log('dispatching', action);
		let result = next(action);
		console.log('next state', store.getState());
		return result
	};

	return store
};

const store = init();

export default store;
*/

const init = () => {
	const persistedState = loadState();
	const store = Redux.createStore(rootReducer, persistedState);

	store.subscribe(debounce(() => {
		saveState(store.getState())
	}, 1000))


	const next = store.dispatch;
	store.dispatch = (action) => {
		console.log('dispatching', action);
		let result = next(action);
		console.log('next state', store.getState());
		return result
	};

	return store
};

export default init();

