import { types } from '../actions.js';
import initialState from '../initialState.js';

const moduleTables = (state = initialState.moduleTables, action) => {
	switch (action.type) {
		case types.UPDATE_MODULE_TABLE:
			return {...state, [action.payload.model]: action.payload.fields};
		default:
			return state
	}
}

export default moduleTables
