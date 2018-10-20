import React, {Component} from 'react';
import {Card, Icon, InputGroup, AnchorButton} from '@blueprintjs/core';
import {view} from 'react-easy-state';
import axios from 'axios';

// styles
import styles from './Menu.module.scss';

// store
import menu from '../../stores/MenuStore';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
      searchResults: [],
      searchTerm: ""
    };

    this.changeMenuState = this.changeMenuState.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.searchValueDlaMarcina = this.searchValueDlaMarcina.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  changeMenuState() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleSearchTermChange(event) {
    const value = event.target.value;
    this.searchValue(value);
    this.setState({
      searchTerm: value
    })
  }

  searchValue(value) {
    axios.get('http://bial-hack-api.azurewebsites.net/api/search/search?query=' + value)
      .then((response) => {
        if (response.data) {
          this.setState({
            searchResults: response.data
          })

          if(response.data.length != 0)
            this.props.setMarkersOnSearch(response.data);
        }
      })
      .catch((error) => {
      })
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
                  iconSize={40} icon='cross' />
              </div>
            </div>
            :
            <div onClick={this.changeMenuState}
              className={styles.menuLabel}>
              <div>
                <Icon className={styles.hamburgerIcon} color='white'
                  iconSize={40} icon='chevron-left' />
              </div>
            </div>
        }
        {
          this.state.showMenu ?
            <div>
              <Card>
                <InputGroup onChange={this.searchValue} large round leftIcon='search' className={styles.inuptGroup} />
                <InputGroup name="serachTerm" onChange={this.handleSearchTermChange} large round leftIcon='search' />
                {menu.search}
              </Card>
              <br />
              <ul>
              {this.state.searchResults.map((result, i) =>
                    <li key={i}>
                        { result.description } <br/>
                        { result.trashType } <br/>
                        { result.date } <br/>
                        { result.vehicleNumber } <br/>
                        { result.latitude }, {result.longitude}
                    <hr/>
                    </li>
                )}
                </ul>
              {this.props.children}
            </div>
            :
            <div style={{ height: '100%' }}
              onClick={this.changeMenuState}>
            </div>
        }
      </div>
    );
  }
}

export default view(Menu);
