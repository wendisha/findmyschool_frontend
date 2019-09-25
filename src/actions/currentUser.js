import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyBookmarks, clearBookmarks } from "./myBookmarks.js"
import { clearSchools } from './browseSchools'

//SYNCHRONOUS ACTION return POJOS (plain old js objects)
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//Impt! Thunk gives us the ability to return an action creator in the form of a function! 
//So our return is the same as saying return function (dispatch) { }
export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
            //Sends cookies back:
            credentials: "include",
            method: "DELETE"
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(clearSchools())
            }
        })
        .catch(console.log)
    }
}