import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./FrontPage.css";
import useDarkMode from "use-dark-mode";
import Toggle from "react-toggle";


function FrontPage () {
    return (
        <div className="front-page-container">
            <header className="front-page-nav">
                <nav className="front-page-nav">
                    <div className="front-page-logo">
                        <div className="front-page-img"></div>
                        <h3>TotheMoon</h3>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default FrontPage