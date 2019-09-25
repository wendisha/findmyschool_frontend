import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {

state = {
  clicked: false
}

componentDidMount(){
  this.setState({
    clicked: false
  })
}


handleFormClick = () => {
  this.setState(prevState => ({
    clicked: !prevState.clicked
  }))
}

  render () {
    return (
      <div class="welcome">
        <Row>
          <Col>
            <h3>Welcome to</h3>
            <h1>Find My School</h1><br/>
              { !this.state.clicked ? 
              <span>
                <Button variant="outline-primary" onClick={this.handleFormClick}><Link to="/signup">Sign Up</Link></Button> 
                 OR <Button variant="outline-primary" onClick={this.handleFormClick}><Link to="/login">Log In</Link></Button>
              </span> : null
              }
          </Col>
        </Row>
      </div>
    )}
  };

//Use the ternary to check for the url instead, to fix situation with buttons
  
export default Home;
