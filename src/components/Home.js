import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const Home = () => (

  <Container>
    <Row>
      <Col>
        <br/><br/><br/><br/><br/><br/>
        <h2>Welcome to</h2>
        <h1>Find My School</h1><br/>
        <span>
          <Button variant="outline-primary">
            <Link to="/signup">Sign Up</Link>
          </Button>  OR  <Button variant="outline-primary"><Link to="/login">Log In</Link></Button>
        </span>
      </Col>
   </Row>
  </Container>   
);

export default Home;