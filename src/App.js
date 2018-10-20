import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Menu from './components/Menu/Menu';

// styles
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

// views
import Home from './views/HomeView';
import ExampleView from './views/exampleView';
import MapContainer from './components/Map/Map.js';
import AlgMapContainer from './components/Map/AlgMap.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapContainer} />
            <Route exact path="/alg-map" component={AlgMapContainer} />
            <Route path='/example' component={ExampleView}/>
            <Menu/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
