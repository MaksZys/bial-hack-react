import React, {Component} from 'react';

// styles
import styles from './Container.module.scss';

// components
import RfidCard from '../Menu/MenuComponents/RFID/RfidCard';
import Nav from '../Menu/MenuComponents/Navigation/MenuNavigation';

class Container extends Component {
  render() {
    return (
      <div className={styles.containerDisplay}>
        {this.props.children}
        <Menu>
          <RfidCard/>
          <Nav/>
        </Menu>
      </div>
    );
  }
}

export default Container;
