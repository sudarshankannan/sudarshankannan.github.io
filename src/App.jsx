import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.jsx';
import NavBar from './components/NavBar.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Homepage} />
        </div>
      </Router>
    )
  }
}export default App;