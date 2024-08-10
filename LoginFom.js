import React from "react";

//import React, { useState } from 'react';

const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if (username === 'user' && password === 'password') {
//       alert('Login successful!');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

  return (
    <div className="login">
      {/* <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form> */}
      <p>login form here </p>
    </div>
  );
};

export default LoginForm;