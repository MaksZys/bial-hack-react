import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import axios from 'axios';
import decodePolyLine from 'decode-google-map-polyline';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfoWindow: false,
            loading: true,
            activeMarker: {},
            nearestTrainers: [],
            selectedTrainer: {},
            places: []
        };
        this.init();
    }

    drawPathOnMap = () => {
      const startLat = 53.136602;
      const startLng = 23.158714;
      const endLat = 53.132591;
      const endLong = 23.163016;
      const apiUrl = 'http://bial-hack-api.azurewebsites.net/api/trashtransport/getroute?startLat='+ startLat +'&startLng=' + startLng + '&destLat=' + endLat + '&destLng=' + endLong + '&fbclid=IwAR0wWDXsdLRJgkXodD78bzJiCRYw8PQk3AM9VDJoZRsAluS41A-Ak-Ulu40';

            axios.get(apiUrl)
            .then((response) => {
                if (response.data) {
                    this.setState({
                        places: decodePolyLine(response.data.encodedPlaces)
                    });
                    this.setLoading(false);
                }
            })
            .catch((error) => {
                this.setLoading(false);
            })
    }

    setLoading = (state) =>
        this.setState({
            loading: state
        });


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
                        zoom={12}
                        initialCenter={{
                            lat: this.props.center.lat,
                            lng: this.props.center.lng
                        }}>
                           <Polyline
                           path= {this.state.places}
                           strokeOpacity= {1.0}
                           strokeWeight= {2}
                       />
                    </Map> : ''
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCzPSZ_8Zp_lr8s2Dduhsnm1KoUwtvuNVY')
})(MapContainer)