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
      searchTerm: "",
      searchPolylinesTerm: ""
    };

    this.changeMenuState = this.changeMenuState.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.searchValueDlaMarcina = this.searchValueDlaMarcina.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handlePolylinesChange = this.handlePolylinesChange.bind(this);
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

  handlePolylinesChange(event){
    var value = event.target.value;
    this.setState({
      searchPolylinesTerm: value
    });
  }

  searchValueDlaMarcina(event) {
    var term = this.state.searchPolylinesTerm;
    this.props.searchPolylinesParent(term);
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
            <div className={styles.background}>
              <Card>
                <InputGroup name="serachTerm" onChange={this.handleSearchTermChange} large round leftIcon='search' />
                <InputGroup onChange={this.handlePolylinesChange} large round leftIcon='search' className={styles.inuptGroup} />
                <AnchorButton onClick={this.searchValueDlaMarcina} className={styles.inuptGroup} >szukaj</AnchorButton>
                {menu.search}
              </Card>
              <br />
              <ul className={styles.listSearch}>
              {this.state.searchResults.map((result, i) =>
                    <li key={i} className={styles.listElement}>
                      <span class={styles.title}>{result.description }</span>
                      <span class={styles.trashType}>Rodzaj odpadów: { result.trashType }</span>
                      <span>Data: { result.date }</span>
                      <span>Numer rejestracyjny pojazdu: { result.vehicleNumber }</span>
                      <span>Współrzędne: { result.latitude }, {result.longitude}</span>
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
