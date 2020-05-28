import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import PrivateRoute from './components/Splash/PrivateRoute'
import SplashPage from './components/Splash/SplashPage';
import Home from './components/User/Home'
import Profile from './components/User/Profile'
import { AuthContext } from './context/aut'

function App() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = React.useState(existingTokens)

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    setAuthTokens(data)
  }



  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens}}>
      <Router>
        <Route exact path="/" component={SplashPage}/>
        <PrivateRoute exact path="/:username" component={Home} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
