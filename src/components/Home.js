import React from 'react';
import { Link } from 'react-router-dom'
// import unsplash1 from '../../public/unsplash1.jpg';

// var styles = {
// color:'violet',
// backgroundImage: '../../public/unsplash1.jpg'
// };


const Home = () => (
  <div>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </div>

);

export default Home;