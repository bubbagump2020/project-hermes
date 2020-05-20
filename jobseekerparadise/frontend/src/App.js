import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import PrivateRoute from './components/Splash/PrivateRoute'
import SplashPage from './components/Splash/SplashPage';
import Home from './components/User/Home'
import Profile from './components/User/Profile'

function App() {
  return (
    <Router>
        <Route exact path="/" component={SplashPage}/>
        <PrivateRoute exact path="/:username" component={Home} />
        <PrivateRoute exact path="/:username/profile" component={Profile} />
    </Router>
  );
}

export default App;
