import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import FrontPage from './components/FrontPage'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!sessionUser){
    return (
      <>
        {/* <Navigation isLoaded={isLoaded} /> */}
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </>
    );
  } else {

    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
      </>
    );
  }
}

export default App;