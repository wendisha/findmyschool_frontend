const initialState = []
  
export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            //console.log(action.schools.businesses)
            return action.schools.businesses  // action.schools
        default:
            return state
    }
}