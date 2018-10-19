import React, { Component } from 'react';
import './App.css';

// views
import Home from './views/HomeView';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
