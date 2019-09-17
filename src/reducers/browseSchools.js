const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            return action.schools
        default:
            return state
    }
}