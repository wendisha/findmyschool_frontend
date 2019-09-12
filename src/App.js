import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login'
// import Logout from './components/Logout'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
// import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom' //We need browser router to wrap our routes


class App extends React.Component {
    componentDidMount() {
        // class? then props!
        this.props.getCurrentUser()  
        // https://api.greatschools.org/schools/CA/Alameda?key=f474a366f74c75cceff4a25e2ff19ed7
        // fetch('https://api.greatschools.org/schools/CA/Alameda?key=f474a366f74c75cceff4a25e2ff19ed7', {
        //     headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'} 
        // })
        // .then(r => r.json())
        // .then(r => console.log(r)  ) 
    }
  
    render(){
        return (
            <div className="App">
                <NavBar />
                {/* <MainContainer /> */}
                <Router />
                    <Route exact path='/login' component={ Login }/>
                    <Route />
                    <Route />
                <Router />
            </div>
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