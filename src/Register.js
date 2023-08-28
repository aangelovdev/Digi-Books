import logo from './assets/img/logo.png';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

async function register(credentials) {
  return fetch('https://books-library-dev.herokuapp.com/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordRe, setPasswordRe] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== passwordRe) {
      alert('Passwords do not match');
      return;
    }

    const response = await register({
      username,
      password
    });

    if (response.error) {
      alert(response.error);
    } else {
      alert(response.message);
      navigate("/login");
    }
  }

  return (
    <div className="container">
      <div className="left-container">
        <form onSubmit={handleSubmit} className="content">
          <img id="logo" src={logo} />
  
          <h3 id="welcome-back">WELCOME TO THE BEST BOOK DATABASE!</h3>
          
          <div className="username-field">
            <label>Username</label>
            <input type="text" onChange={e => setUsername(e.target.value)} />
          </div>

          <div className="password-field">
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </div>

          <div className="password-field">
            <label>Repeat password</label>
            <input type="password" onChange={e => setPasswordRe(e.target.value)} />
          </div>

          <p></p>

          <button type="submit">SIGN UP</button>
  
          <p>You have an account? <Link to="/login">LOG IN HERE</Link></p>
        </form>
      </div>

      <div className="right-container"></div>
    </div>
  );
}

export default Register;
