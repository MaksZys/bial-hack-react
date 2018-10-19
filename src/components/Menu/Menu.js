import React, {Component} from 'react';
import {Icon} from '@blueprintjs/core';

// styles
import styles from './Menu.module.scss';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.changeMenuState = this.changeMenuState.bind(this);
  }

  changeMenuState() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div align="right"
        className={this.state.showMenu ? styles.menuContainerActive : styles.menuContainerDisabled}>
        {
          this.state.showMenu ?
            <div onClick={this.changeMenuState} className={styles.menuLabel}>
              <h3>
                <Icon icon='chevron-right'/>
                Menu
              </h3>
            </div>
            :
            <div onClick={this.changeMenuState} className={styles.menuLabel}>
              <h3>
                <Icon icon='chevron-left'/>
              </h3>
            </div>
        }
        {
          this.state.showMenu ?
            <div>
              {this.props.children}
            </div>
            :
            <div></div>
        }
      </div>
    );
  }
}

export default Menu;
