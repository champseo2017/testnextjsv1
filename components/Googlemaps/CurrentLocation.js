import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  };

class CurrentLocation extends Component {
    static defaultProps = {
        zoom: 18,
        initialCenter: {
          lat: 18.7953,
          lng: 98.9620
        },
        centerAroundCurrentLocation: false,
        visible: true
      };
    
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
      }

      componentDidUpdate(prevProps, prevState) {
     
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
    
            this.recenterMap();
        }
      
      }

      recenterMap() {
        const map = this.map;
        
        const current = this.state.currentLocation;
     
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
            
          let center = new maps.LatLng(current.lat, current.lng);
         
          map.panTo(center);
        
        }
      }

      componentDidMount() {
         
        if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
          
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
           
            console.log(coords)
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
          
          }
          
        }
        this.loadMap();
       
      }

      loadMap() {
        if (this.props && this.props.google) {
          // checks if google is available
          const { google } = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
    
          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);
    
          let { zoom } = this.props;
          const { lat, lng } = this.props.initialCenter;
          console.log(this.state.currentLocation);
        console.log(this.props.initialCenter);
          const center = new maps.LatLng(lat, lng);
          
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
    
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
        }
      }

      renderChildren() {
        const { children } = this.props;
       
        if (!children) return;
        
        return React.Children.map(children, c => {
          if (!c) return;
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
      }
    
    render() {
        const style = Object.assign({}, mapStyles.map);
        return (
            <div>
                <div style={style} ref="map">
                Loading map...
                </div>
                {this.renderChildren()}
          </div>
        )
    }
}

export default CurrentLocation

/* 
const mapDispatchToProps = {
 sendMessage,
};

export default connect(null, mapDispatchToProps)(MessageSending);

// MessageSending.js
// ...
this.props.sendMessage(message);
// ...
*/

