import React, {Component} from 'react';
import {Card, Icon, InputGroup, AnchorButton} from '@blueprintjs/core';
import {view} from 'react-easy-state';

// styles
import styles from './Menu.module.scss';

// store
import menu from '../../stores/MenuStore';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.changeMenuState = this.changeMenuState.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.searchValueDlaMarcina = this.searchValueDlaMarcina.bind(this);
  }

  changeMenuState() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  searchValue(event) {
    menu.search = event.target.value;
  }

  searchValueDlaMarcina(event) {
    menu.searchDlaMarcina = event.target.value;
  }

  render() {
    return (
      <div align="right"
        className={this.state.showMenu ? styles.menuContainerActive : styles.menuContainerDisabled}>
        {
          this.state.showMenu ?
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
          this.state.showMenu ?
            <div>
              <Card>
                <InputGroup onChange={this.searchValue} large round leftIcon='search' className={styles.inuptGroup} />
              </Card>
              <br/>
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
