import React, {Component} from 'react';
import {Button, Card, Icon, InputGroup} from '@blueprintjs/core';

// styles
import styles from './RfidCard.module.scss';

class RfidCard extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showMore() {
    // this
  }

  render() {
    return (
      <div>
        <Card>
          <div className={styles.rfidContainer}>
            <div>
              <div className={styles.headerContainer}>
                <div>
                  <Icon className={styles.animateArrow} icon={this.state.show ? 'double-chevron-down' : 'double-chevron-right'}/>
                </div>
                <span>
                  Szukaj po tagach RFID
                </span>
              </div>
            </div>
            {
              this.state.show &&
              <div>
                <InputGroup large fill round/>
                <Button>Szukaj</Button>
              </div>
            }
          </div>
        </Card>
      </div>
    );
  }
}

export default RfidCard;
