import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import MyBookmarks from './components/MyBookmarks.js'
import BrowseSchools from './components/BrowseSchools'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, Switch, withRouter } from 'react-router-dom' //We need browser router to wrap our routes

class App extends React.Component {

    state = {
        clicked: false
    }

    componentDidMount() {
        // class? then props!
        this.props.getCurrentUser()  
    }

    
    handleFormClick = () => {
    //  event.preventDefault()
        this.setState(prevState => ({
        clicked: !prevState.clicked
        }))
    }
  //pass history as props to home or set up route!!!
    render(){
        const { loggedIn } = this.props
        return ( 
            <div>
                
                { loggedIn ? <NavBar/> : <Home clicked={this.state.clicked} handleFormClick={this.handleFormClick} />  }
                <Switch>
                    {/* <Route exact path='/' render={ () => loggedIn ? <MyBookmarks /> : <Home/> }/> */}
                    <Route exact path='/signup' component={ Signup }/>
                    <Route exact path='/login' component={ Login }/>
                    <Route exact path='/bookmarks' component={ MyBookmarks }/>
                    <Route exact path='/browse-schools' component={ BrowseSchools }/>
                </Switch>
            </div>
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

const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser,
      bookmarks: state.MyBookmarks
    })
}

//getCurrentUser is out mapDispatchToProps
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));