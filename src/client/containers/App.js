import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from "../Components/login";

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div className='login-page'><Login/></div>}/>
      </Switch>
    </Router>
  );
};

export default AppContainer;