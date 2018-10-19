import React, {Component} from 'react';
import { Button, Icon } from '@blueprintjs/core';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <Button>Text in button</Button>
        <Icon icon="clipboard"/>
      </div>
    );
  }
}

export default Home;
