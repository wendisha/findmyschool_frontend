import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import myBookmarks from './reducers/myBookmarks.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
// import browseSchools from './reducers/browseSchoolsForm.js'
import thunk from 'redux-thunk'

//Displaying different syntax; could've user currentUser: currentUser
const reducer = combineReducers({ 
    // users: usersReducer, 
    currentUser, 
    loginForm, 
    myBookmarks, 
    signupForm,
    // browseSchools 
});

// Newer way of setting up middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

//exporting default allows us to import 'store' instead of '{ store }'
export default store