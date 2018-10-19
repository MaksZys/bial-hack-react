import React, {Component} from 'react';

// styles
import styles from './Container.module.scss';

class Container extends Component {
  render() {
    return (
      <div className={styles.containerDisplay}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
