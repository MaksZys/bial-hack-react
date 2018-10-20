import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// styles
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

// views
import Home from './views/HomeView';
import ExampleView from './views/exampleView';
import MapContainer from './components/Map/Map.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapContainer} />
          <Route path='/example' component={ExampleView}/>
        </div>
      </Router>
    );
  }
}

export default App;
