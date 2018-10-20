import React, {Component} from 'react';
import {Card, Icon, InputGroup} from '@blueprintjs/core';
import {view} from 'react-easy-state';

// styles
import styles from './Menu.module.scss';

// store
import menu from '../../stores/MenuStore';

class Menu extends Component {

  constructor() {
    super();

    this.changeMenuState = this.changeMenuState.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  changeMenuState() {
    menu.showMenu = !menu.showMenu;
  }

  searchValue(event) {
    menu.search = event.target.value;
  }



  render() {
    return (
      <div align="right"
        className={menu.showMenu ? styles.menuContainerActive : styles.menuContainerDisabled}>
        {
          menu.showMenu ?
            <div onClick={this.changeMenuState}
              className={styles.menuLabel}>
              <div>
                <Icon className={styles.hamburgerIcon} color='white'
                  iconSize={40} icon='cross'/>
              </div>
            </div>
            :
            <div onClick={this.changeMenuState}
              className={styles.menuLabel}>
              <div>
                <Icon className={styles.hamburgerIcon} color='white'
                  iconSize={40} icon='chevron-left'/>
              </div>
            </div>
        }
        {
          menu.showMenu ?
            <div>
              <Card>
                <InputGroup onChange={this.searchValue} large round leftIcon='search'/>
                {menu.search}
              </Card>
              {this.props.children}
            </div>
            :
            <div style={{height: '100%'}}
              onClick={this.changeMenuState}>
            </div>
        }
      </div>
    );
  }
}

export default view(Menu);
