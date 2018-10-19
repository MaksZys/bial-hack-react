import React, {Component} from 'react';
import Home from '../components/Home';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hi'
    };
  }

  render() {
    return (
      <div>
        <Home msg='Hi user'/>
      </div>
    );
  }
}

export default HomeView;
