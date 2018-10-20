import React, {Component} from 'react';
import Container from '../components/Container/Container';
import Menu from '../components/Menu/Menu';
import RfidCard from '../components/Menu/MenuComponents/RFID/RfidCard';



class ExampleView extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>

          </div>
          <Menu>
            <RfidCard/>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default ExampleView;
