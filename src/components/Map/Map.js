import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import axios from 'axios';
import decodePolyline from 'decode-google-map-polyline';
import Container from '../Container/Container';
import Menu from '../Menu/Menu';

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
      searchPlaces: []
    };
  }

  async componentDidMount() {
    // const apiUrl = 'https://bial-hack-api.azurewebsites.net/api/trashtransport/GetByVehicleNumber?vehicleNumber=BL 46467';
    // const polyline = [];
    // await axios.get(apiUrl)
    //   .then(async (response) => {
    //     if (response.data) {
    //       for (let i = 0; i < response.data.length - 1; i++) {
    //         this.drawPathOnMap(response.data[i].latitude, response.data[i].longitude, response.data[i + 1].latitude, response.data[i + 1].longitude)
    //           .then((nestedResponse) => {
    //             if (nestedResponse.data) {
    //               polyline.push(decodePolyline(nestedResponse.data.encodedPlaces));
    //             }
    //             this.setState({
    //               places: polyline
    //             })
    //           })
    //           .catch((error) => {
    //             console.error(error);
    //           });
    //       }
    //     }

    //   },
    //     (responseError) => {
    //       console.error(responseError)
    //     });
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

  setMarkersOnSearch(points){
    this.setState({
      searchPlaces: points
    });
  }

  render() {
    return (
      <div className="home-map">
        <Container>
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

            {this.state.searchPlaces.length != 0 ? this.state.searchPlaces.map((place, i) =>
             <Marker
             key={i}
             index={i}
             position={{ lat: place.latitude, lng: place.longitude }}
             icon={'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'} />
            ) : ''}
          </Map>
          <Menu setMarkersOnSearch={this.setMarkersOnSearch}/>
        </Container>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCzPSZ_8Zp_lr8s2Dduhsnm1KoUwtvuNVY')
})(MapContainer)