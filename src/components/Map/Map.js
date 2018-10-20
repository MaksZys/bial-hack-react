import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import axios from 'axios';
import decodePolyline from 'decode-google-map-polyline';
import Container from '../Container/Container';
import Menu from '../Menu/Menu';

import menu from '../../stores/MenuStore';
import {view} from 'react-easy-state';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      loading: true,
      activeMarker: {},
      nearestTrainers: [],
      selectedTrainer: {},
      places: [],
      polilineArray: [],
    };
  }

  async componentDidMount() {
    const apiUrl = 'https://bial-hack-api.azurewebsites.net/api/trashtransport/GetByVehicleNumber?vehicleNumber=BL 46467';
    const polyline = [];
    await axios.get(apiUrl)
      .then(async (response) => {
        if (response.data) {
          for (let i = 0; i < response.data.length - 1; i++) {
            this.drawPathOnMap(response.data[i].latitude, response.data[i].longitude, response.data[i + 1].latitude, response.data[i + 1].longitude)
              .then((nestedResponse) => {
                if (nestedResponse.data) {
                  polyline.push(decodePolyline(nestedResponse.data.encodedPlaces));
                }
                this.setState({
                  places: polyline
                })
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }

      },
        (responseError) => {
          console.error(responseError)
        });
  }

  async drawMapFromArray() {
  }

  drawPathOnMap(startLat, startLng, endLat, endLng) {
    const apiUrl = 'http://bial-hack-api.azurewebsites.net/api/trashtransport/getroute?startLat=' + startLat + '&startLng=' + startLng + '&destLat=' + endLat + '&destLng=' + endLng + '&fbclid=IwAR0wWDXsdLRJgkXodD78bzJiCRYw8PQk3AM9VDJoZRsAluS41A-Ak-Ulu40';
    const polyline = [];
    return axios.get(apiUrl)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedTrainer: this.state.nearestTrainers[props.index],
      activeMarker: marker,
      showInfoWindow: true
    });
  }

  render() {
    return (
      <div className="home-map">
          <Map google={this.props.google}
            zoom={15}
            initialCenter={{
              lat: 53.136602,
              lng: 23.158714
            }}>

            {this.state.places.length != 0 ? this.state.places.map((place, i) =>
              <Polyline
                key={i}
                path={place}
                strokeOpacity={1.0}
                strokeWeight={4}
              />
            ) : ''}
          </Map>
      </div>

    );
  }
}

export default view(GoogleApiWrapper({
  apiKey: ('AIzaSyCzPSZ_8Zp_lr8s2Dduhsnm1KoUwtvuNVY')
})(MapContainer));

