import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const [search, setSearch] = useState('')

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
        <NavLink exact to="/">
         Home
        </NavLink>
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
            <button>toggle</button>
          </div>
          {isLoaded && sessionLinks}
        </div>
      </div>
    );
}

export default Navigation;