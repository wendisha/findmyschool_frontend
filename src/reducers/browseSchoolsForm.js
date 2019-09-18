const initialState = {
    zipcode: ''
  }
  

export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_SCHOOLS":
            return action.schools
        default:
            return state
    }
}

  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.formData
      case "RESET_LOGIN_FORM":
        // we want to return the initialState, meaning a clear form
        return initialState
      default:
        return state
    }
  }