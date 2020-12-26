import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.jsx';
import NavBar from './components/NavBar.jsx'
import AboutMe from './components/AboutMe.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Homepage} />
          <Route name="about me" exact path="/" component={AboutMe} />
        </div>
      </Router>
    )
  }
}
export default App;