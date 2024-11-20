import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add API call here
    navigate('/home');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button onClick={handleLogin}>Login</button>
      </form>
      <p>
        Not a member? <a href="/register">Create an account</a>
      </p>
    </div>
  );
}

export default Login;