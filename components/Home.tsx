import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Dog Shleter</h1>
      <p>You can adopt the Dog you like!</p>

      <div>
        <Link to="/DogList">
          <button>Dog List</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/ApplicationForm">
          <button>Application Form</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;