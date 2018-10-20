import React, {Component} from 'react';
import {Callout, Card} from '@blueprintjs/core';

// pictures
import loading from '../../assets/images/Double Ring-1s-200px.gif';

// store
import {rfidSearch} from '../../stores/Search';

// styles
import styles from './rfidSearchResult.module.scss';


class RfidSearchResult extends Component {

  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    console.log(rfidSearch.result);
    this.setState({
      places: rfidSearch.result,
    });
  }


  componentWillReceiveProps(nextProps) {
    if(this.state.places !== rfidSearch.result) {
      console.log('Hi from ReciveProps');
      this.setState({
        places: rfidSearch.result,
      });
    }
  }


  render() {
    return (
      <div className={styles.listOfDataContainer}>
        {
          (rfidSearch.result.length === 0 || this.state.places.length === 0) &&
          <div className={styles.loadingContainer}>
            <div className={styles.loading}>
              <img src={loading} alt='Loading animation'/>
            </div>
          </div>
        }
        {
          (!rfidSearch.result.length === 0 || this.state.places.length !== 0) &&
            <h1 style={{marginLeft: '2.5rem'}}>Kontener o numerze: {rfidSearch.searchPassword}</h1>
        }
        <ul className={styles.list}>
          {
            (!rfidSearch.result.length === 0 || this.state.places.length !== 0) &&
              this.state.places.map(element => {
                return(
                  <li>
                    <Card>
                      <div>
                        <h3>Pojazd numer: {element.vehicleName}</h3>
                        <div>
                          <span>
                            Numer rejestracyjny: {element.vehicleNumber}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h5>Położenie kontenera</h5>
                        <span>x: {element.longitude}</span>
                        <span>y: {element.latitude}</span>
                      </div>
                      <br/>
                      <div>
                        <span>Typ odpadów: {element.trashType}</span>
                      </div>
                      {/*{element.description}*/}
                    </Card>
                  </li>
                );
              })
          }
        </ul>
      </div>
    );
  }
}

export default RfidSearchResult;
