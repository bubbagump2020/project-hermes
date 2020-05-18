import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import SplashPage from './components/Splash/SplashPage';
import Home from './components/User/Home'

function App() {
  return (
    <Router>
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/:username" component={Home} />
    </Router>
  );
}

export default App;
