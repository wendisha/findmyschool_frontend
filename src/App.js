import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login'
// import Logout from './components/Logout'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {
    componentDidMount() {
        // class? then props!
        this.props.getCurrentUser()
    }
  
    render(){
        return (
            <NavBar />
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
        );
    }
}

// //Allow App.js to have knowledge of the current user, to show the Login button only if user is logged out and vice versa
// //The incoming argument (state) is an object, coming from Redux, therefore we can discontruct it and grab its currentUser property
// const mapStateToProps = ({currentUser}) => {
//     return ({
//         currentUser
//     })
// }

//getCurrentUser is out mapDispatchToProps
export default connect(null, {getCurrentUser})(App);