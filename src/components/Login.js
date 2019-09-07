import React from 'react'

const Login = () => {
    return (
        <form onSubmit={undefined}>
          <input placeholder="username" value={undefined} name="username" type="text" onChange={undefined} />
          <input placeholder="password" value={undefined} name="password" type="text" onChange={undefined} />
          <input type="submit" value="Log In"/>
        </form>
    )
}

export default Login