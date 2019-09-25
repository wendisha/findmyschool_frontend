const initialState = []
  
export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            //the reducer updates the global store with the data that was sent by action
            return action.schools.businesses  // action.schools
        default:
            return state
    }
}