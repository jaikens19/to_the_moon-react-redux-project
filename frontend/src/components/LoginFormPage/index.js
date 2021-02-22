import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import LoginImg from '../../images/LoginImg.jpg'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([]);

    function passwordToggle() {
        setShowPassword(!showPassword )
        
    }




    if (sessionUser) return (
        <Redirect to="/" />
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
        <div className='login-page-image-div' />
        <div className='login-form-div'>
            <form className="login-form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            <p>Welcome to Robinhood</p>
                <label>
                        Email or username
            <input className="email-field"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                <div className='password-form-div'>
                    <input className="password-field"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                        required
                    />
                    <i onClick={passwordToggle}>{<i class="fas fa-eye"></i>}</i>
                </div>       
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
    );
}

export default LoginFormPage;