import React, {Component} from 'react';
import {Button, Card, Icon, InputGroup} from '@blueprintjs/core';
import {view} from 'react-easy-state';
import {getByRFID} from '../../../../service/rfidService';
import {Link} from 'react-router-dom';

// styles
import styles from './RfidCard.module.scss';

// store
import {rfidSearch} from '../../../../stores/Search';

class RfidCard extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };

    this.showMore = this.showMore.bind(this);
    this.bindSearch = this.bindSearch.bind(this);
    this.bindSearch = this.bindSearch.bind(this);
    this.bindSearch = this.bindSearch.bind(this);
  }

  showMore() {
    this.setState({
      show: !this.state.show,
    });
  }

  bindSearch(event) {
    rfidSearch.searchPassword = event.target.value;
  }

  getData() {
    getByRFID(rfidSearch.searchPassword);
  }

  keyPress(e){
    if(e.key === 'Enter'){
      // getByRFID(rfidSearch.searchPassword);
      this.getData();
    }
  }



  render() {
    return (
      <div>
        <Card className={styles.cardStyles}>
          <div className={styles.rfidContainer}>
            <div onClick={this.showMore}>
              <div className={styles.headerContainer}>
                <div>
                  <Icon className={styles.arrowImage}
                    icon={this.state.show ? 'double-chevron-down' : 'double-chevron-right'}/>
                </div>
                <span>
                  Szukaj po tagach RFID
                </span>
              </div>
            </div>
            {
              this.state.show &&
              <div className={styles.searchContainer}>
                <InputGroup large fill round onChange={this.bindSearch} onKeyPress={this.keyPress}/>
                <Link to={`/rfidResult/${rfidSearch.searchPassword}`}>
                  <Button className={styles.buttonImage} minimal icon='search' onClick={this.getData}>
                  </Button>
                </Link>
              </div>
            }
          </div>
          {
            (!this.state.show && rfidSearch.searchPassword.length !== 0) &&
            <div>
              <span>Szukany tag: {rfidSearch.searchPassword}</span>
            </div>
          }
        </Card>
      </div>
    );
  }
}

export default view(RfidCard);
