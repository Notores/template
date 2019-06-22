import moduleTables from './reducers/moduleTables.js';
import layout from './reducers/layout.js';
import user from './reducers/user.js';


export default Redux.combineReducers({
	moduleTables,
	user,
	layout
})

