import React, {Component} from 'react';
import { Button, Icon } from '@blueprintjs/core';
import MapContainer from '../Map/Map.js';

// styles
import styles from './home.module.scss';
import search from '../../store/assets/images/search.jpg';
import bialystok from '../../store/assets/images/bialystok-mapa.jpg';
import knowledge from '../../store/assets/images/knowledge.jpg';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: 0,
    };

    this.changeCardUp = this.changeCardUp.bind(this);
    this.changeCardDown = this.changeCardDown.bind(this);

  }

  changeCardDown() {
    (this.state.cardNumber === 2) ? this.setState({cardNumber: 0}) : this.setState({cardNumber: this.state.cardNumber + 1});
  }

  changeCardUp() {
    (this.state.cardNumber === 0) ? this.setState({cardNumber: 2}) : this.setState({cardNumber: this.state.cardNumber - 1});
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <h3 className={styles.homeTitle}>Innowacyjne wspomaganie nadzorowania śmieci</h3>
        {
          this.state.cardNumber === 0 &&
          <div className={styles.contentCard}>
            <div className={styles.imgWrapper}>
              <img src={search} alt='search image'/>
            </div>
            <p>treść częście która chcemy przekazać</p>
          </div>
        }

        

        {
          this.state.cardNumber === 1 &&
          <div className={styles.contentCard}>
            <p>kolejna treść</p>
            <div className={styles.imgWrapper}>
              <img src={bialystok} alt='search image'/>
            </div>
          </div>
        }

        {
          this.state.cardNumber === 2 &&
          <div className={styles.contentCard}>
            <div className={styles.imgWrapper}>
              <img src={knowledge} alt='search image'/>
            </div>
            <p>i ostatnia część</p>
          </div>
        }
        <div className={styles.iconWrapper}>
          <Icon icon='direction-left' className={styles.rightArrow} onClick={this.changeCardDown} />
          <Icon icon='direction-right' className={styles.rightArrow} onClick={this.changeCardUp} />
        </div>
        <div className={styles.contractorCard}>
          <h3>Aplikację wykonali:</h3>
          <span className={styles.userName}>
            <Icon icon='user' className={styles.iconUser}/>
            Nela Brzozowska
          </span>
          <span className={styles.userName}>
            <Icon icon='user' className={styles.iconUser}/>
            Maksymilian Zyskowski
          </span>
          <span className={styles.userName}>
            <Icon icon='user' className={styles.iconUser}/>
            Kacper Świsłocki
          </span>
          <span className={styles.userName}>
            <Icon icon='user' className={styles.iconUser}/>
            Marcin Tyborowski
          </span>
          <span className={styles.userName}>
            <Icon icon='user' className={styles.iconUser}/>
            Kamil Łętowski
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
