import React from 'react';
import reactLogo from '../assets/react.png'; // make sure to add a react-logo.png image in the assets folder

const Home = () => {
  return (
    <div className="home">
      <h1>TASK5</h1>
      <p>I have successfully created my first landing page using React JS</p>
      <img src={reactLogo} alt="React Logo" />
    </div>
  );
}

export default Home;
