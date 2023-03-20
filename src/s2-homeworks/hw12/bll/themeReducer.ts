const initState: InitialState = {
	themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): InitialState => { // fix any
	switch (action.type) {
		case "SET_THEME_ID":
			return {
				...state,
				themeId: action.id
			}

		default:
			return state
	}
}

type InitialState = {
	themeId: number
}

type ActionsType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
