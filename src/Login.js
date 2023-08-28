import logo from './assets/img/logo.png';
import { useState } from 'react';
import useToken from './useToken';
import { Link, useNavigate } from "react-router-dom";

async function login(credentials) {
  return fetch('https://books-library-dev.herokuapp.com/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

function Login() {

  const navigate = useNavigate();

  const { token, setToken } = useToken();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();

    const response = await login({
      username,
      password
    });

    if (response.error) {
      alert(response.error);
    } else {
      setToken(response.token);
      navigate("/library");
    }
  }
  
  return (
    <div className="container">
      <div className="left-container">
        <form onSubmit={handleSubmit} className="content">
          <img id="logo" src={logo} />
  
          <h3 id="welcome-back">WELCOME BACK!</h3>
          
          <div className="username-field">
            <label>Username</label>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </div>

          <div className="password-field">
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </div>

          <p>Recover password</p>
  
          <button type="submit">LOG IN</button>
  
          <p>You don`t have an account? <Link to="/register">SIGN UP HERE</Link></p>
        </form>
      </div>

      <div className="right-container"></div>
    </div>
  );
}

export default Login;
