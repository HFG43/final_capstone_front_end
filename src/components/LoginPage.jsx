import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { consultUser, setUser } from '../Redux/slices/userSlice';
import '../Style/Login.css';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tryLogin = async (event) => {
    event.preventDefault();
    const result = dispatch(consultUser(inputValue));
    if (result) {
      dispatch(setUser(inputValue));
      navigate('/MainPage');
    }
  };

  return (
    <div className="loginPage">
      <h1>Welcome to the best experiences app</h1>
      <h3>What are you waiting???, some experiences are waiting for you</h3>
      <form className="loginForm" onSubmit={tryLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputValue}
          onChange={InputChange}
        />
        <button type="submit">Log In</button>
        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default LoginPage;
