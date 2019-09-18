const initialState = {
    schools: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            return {...state, schools: state.schools.concat(action.payload)}
        default:
            return state
    }
}