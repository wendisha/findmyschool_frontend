//SYNCHRONOUS ACTION CREATORS: (synchronous action creators return POJOS (plain old js objects))
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user //payload: user
    }
}

//ASYNCHRONOUS ACTION CREATORS:
//this is a asynchronous action, we need to send a request to our back end in order to log in
export const login = credentials => {
    return dispatch => {
        // localhost:3001 Rails Server 
        return fetch("http://localhost:3001/api/v1/login", {
            //post, because we're setting data about an user in the db
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(user => {   
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)     
    }
}

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(r => r.json())
      .then(user => {   
          if (user.error) {
              alert(user.error)
          } else {
              dispatch(setCurrentUser(user))
          }
      })
      .catch(console.log)     
  }
}