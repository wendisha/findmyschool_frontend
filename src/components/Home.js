import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';
// import '../App.css';

const Home = () => (

  <div>
    <Row>
      <Col>
        <h3>Welcome to</h3>
        <h1>Find My School</h1><br/>
        <span>
          <Button variant="outline-primary"><Link to="/signup">Sign Up</Link></Button>  OR  <Button variant="outline-primary"><Link to="/login">Log In</Link></Button>
        </span>
      </Col>
   </Row>
  </div>   
);

export default Home;