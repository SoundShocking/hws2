const initState: InitialStateType = {
	isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
	switch (action.type) {
		case 'CHANGE_LOADING':
			return {
				...state,
				isLoading: action.isLoading
			}

		default:
			return state
	}
}

type LoadingActionType = {
	type: 'CHANGE_LOADING'
	isLoading: boolean
}

type InitialStateType = {
	isLoading: boolean
}

type ActionsType = LoadingActionType

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	isLoading,
})
