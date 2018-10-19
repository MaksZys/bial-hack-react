import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// views
import Home from './views/HomeView';
import ExampleView from './views/exampleView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/example' component={ExampleView}/>
        </div>
      </Router>
    );
  }
}

export default App;
