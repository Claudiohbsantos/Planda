import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Typewriter from './components/Typewritter.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginContainer from './components/LoginContainer.jsx';

function App() {


  return (
    <div>
      <Typewriter />
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Navbar} />
          <Route exact path="/" component={Navbar} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
