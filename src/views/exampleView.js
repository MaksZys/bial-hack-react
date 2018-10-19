import React, {Component} from 'react';
import Container from '../components/Container/Container';
import Menu from '../components/Menu/Menu';

class ExampleView extends Component {
  render() {
    return (
      <div>
        <Container>
          <div style={{backgroundColor: 'red', width: '40px' }}>duap</div>
          <Menu>
            <h4>Hi</h4>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default ExampleView;
