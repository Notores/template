export const toggleMenuState = () => ({
	type: types.TOGGLE_MENU_STATE,
	payload: {}
})

export const logoutUser = () => ({
	type: types.LOGOUT_USER,
	payload: {}
})

export const verifyLogin = (token) => ({
	type: types.LOGIN_USER,
	payload: {token}
})

export const updateModuleTable = (model, fields) => ({
	type: types.UPDATE_MODULE_TABLE,
	payload: {model, fields}
})

export const types = {
	LOGOUT_USER: 'LOGOUT_USER',
	LOGIN_USER: 'LOGIN_USER',
	TOGGLE_MENU_STATE: 'TOGGLE_MENU_STATE',
	UPDATE_MODULE_TABLE: 'UPDATE_MODULE_TABLE',
}
