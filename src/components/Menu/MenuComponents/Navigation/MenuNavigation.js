import React, {Component} from 'react';
import {Button, Card} from '@blueprintjs/core';

import styles from './MenuNavigation.module.scss';
import {Link} from 'react-router-dom';

class MenuNavigation extends Component {
  render() {
    return (
      <div>
        <Card className={styles.cardMargin}>
          <Link to='/'>
            <Button>
              Homepage
            </Button>
          </Link>
          <Link to='/map'>
            <Button>
              Map
            </Button>
          </Link>
          <Link to='/example'>
            <Button>
              Example
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
}

export default MenuNavigation;
