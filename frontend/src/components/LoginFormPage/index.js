import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';
import LoginImg from '../../images/LoginImg.jpg'
import useDarkMode from 'use-dark-mode'
import Toggle from "react-toggle";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false)
    const darkMode = useDarkMode(false);

     function passwordToggle() {
        setShowPassword(!showPassword)
        
    }




    if (sessionUser) return (
        <Redirect to="/dashboard" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
      <div className="login-page-container">
        <div className="login-page-image-div" />
        <div className="login-form-div">
          <form className="login-form" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div>
              <button type="button" onClick={darkMode.disable}>
                Light Mode
              </button>
              <button type="button" onClick={darkMode.enable}>
                Dark Mode
              </button>
            </div>
            <p>Welcome to Robinhood</p>
            <label>
              Email or username
              <input
                className="email-field"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <div className="password-form-div">
                <input
                  className="password-field"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i onClick={passwordToggle}>{<i class="fas fa-eye"></i>}</i>
              </div>
            </label>
            <Link className="signup-page-link" to="/signup">
              Not yet registered? Signup here
            </Link>
            <button className="login-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
}

export default LoginFormPage;