import { types } from '../actions.js';
import initialState from '../initialState.js';

const layout = (state = initialState.user, action) => {
	switch (action.type) {
		case types.LOGOUT_USER:
			return {...state, token: null, name: null};
		default:
			return state
	}
}

export default layout
