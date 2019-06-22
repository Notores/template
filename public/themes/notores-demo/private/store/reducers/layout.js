import { types } from '../actions.js';
import initialState from '../initialState.js';

const layout = (state = initialState.layout, action) => {
	switch (action.type) {
		case types.TOGGLE_MENU_STATE:
			return {...state, menuState: !state.menuState};
		default:
			return state
	}
}

export default layout
