import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { validateUser } from '../Redux/Slices/usersSlice';
import '../Style/Login.css';
import logo from '../img/logo.jpg';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tryLogin = (event) => {
    event.preventDefault();
    const response = dispatch(validateUser(inputValue));
    response.then((data) => {
      if (data.payload.exist) {
        setErrorMessage('');
        navigate('/MainPage');
      } else {
        setErrorMessage('User does not exist, please register');
      }
    });
  };

  return (
    <div className="loginPage">
      <h1>Welcome to the best experiences app</h1>
      <img src={logo} alt="logo" />
      <h3>What are you waiting???, a lot of experiences are waiting for you</h3>
      <form className="loginForm" onSubmit={tryLogin}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputValue}
          onChange={InputChange}
        />
        <button className="btn" type="submit">Log In</button>
        <Link className="d-flex-col " to="/Register"><button className="btn-non" type="button">Register</button></Link>
      </form>
    </div>
  );
}

export default LoginPage;
