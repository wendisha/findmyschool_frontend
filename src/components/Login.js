import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
    return (
        <form onSubmit={undefined}>
          <input placeholder="username" value={undefined} name="username" type="text" onChange={undefined} />
          <input placeholder="password" value={undefined} name="password" type="text" onChange={undefined} />
          <input type="submit" value="Log In"/>
        </form>
    )
}

//Connect is a function that takes up to 4 arguments, and returns a function that takes a component and returns a component
export default connect(mapStateToProps, { updateLoginForm, login } )(Login)