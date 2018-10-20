import React, {Component} from 'react';
import Menu from '../Menu/Menu';

// styles
import styles from './Container.module.scss';

class Container extends Component {
  render() {
    return (
      <div className={styles.containerDisplay}>
        {this.props.children}
        <Menu/>
      </div>
    );
  }
}

export default Container;
