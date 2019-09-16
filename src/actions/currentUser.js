import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyBookmarks, clearBookmarks } from "./myBookmarks.js"

//SYNCHRONOUS ACTION CREATORS: (synchronous action creators return POJOS (plain old js objects))
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user //payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//ASYNCHRONOUS ACTION CREATORS:
//this is a asynchronous action, we need to send a request to our back end in order to log in
//Impt! Thunk gives us the ability to return an action creator in the form of a function! So our return is the same as saying return function (dispatch) { }
export const login = (credentials, history) => {
    return dispatch => {
        // localhost:3001 Rails Server 
        return fetch("http://localhost:3001/api/v1/login", {
            //post, because we're setting data about an user in the db
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(r => {   
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setCurrentUser(r.data))
                dispatch(getMyBookmarks())
                //dispatch it here in case the user made a mistake while trying to log in, they're still able to see their info.
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)     
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(r => {
          if (r.error) {
            alert(r.error)
          } else {
            dispatch(setCurrentUser(r.data))
            dispatch(getMyBookmarks())
            dispatch(resetSignupForm())
            history.push('/')
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
        .then(r => {   
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setCurrentUser(r.data))
                dispatch(getMyBookmarks())
            }
        })
        .catch(console.log)     
    }
}

export const logout = () => {
    return dispatch => {
        //If the user has clicked the Log Out button, they intended to log out, so we should log them out right away in the front end, 
        //instead of waiting for the backend to respond by resolving the fetch request.
        dispatch(clearCurrentUser())
        dispatch(clearBookmarks())
        return fetch('http://localhost:3001/api/v1/logout', {
            //sends cookies back:
            credentials: "include",
            method: "DELETE"
        })
    }
}