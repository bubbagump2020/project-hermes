import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import SplashPage from './components/Splash/SplashPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SplashPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
