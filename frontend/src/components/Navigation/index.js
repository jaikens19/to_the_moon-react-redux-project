import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import useDarkMode from "use-dark-mode";
import feather from '../../images/feather.svg'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const [search, setSearch] = useState('')
    const darkMode = useDarkMode(false);

    function updateSearch(event) {
        setSearch(event.target.value.toUpperCase())
    }
    
    function handleKeyPress(event) {
        if(event.code === 'Enter') {
          history.push(`/stocks/${search}`);
          setSearch('')
        } 
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
      <div className="navbar">
        <NavLink className="logo" exact to="/"></NavLink>
        <div className="navbar-search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={updateSearch}
            onKeyPress={handleKeyPress}
          ></input>
        </div>
        <div>
          <div className="light-mode-dark-mode-toggle">
            <button
              className="light-mode-button"
              type="button"
              onClick={darkMode.disable}
            >
              Light Mode
            </button>
            <button
              className="dark-mode-button"
              type="button"
              onClick={darkMode.enable}
            >
              Dark Mode
            </button>
          </div>
          {isLoaded && sessionLinks}
        </div>
      </div>
    );
}

export default Navigation;