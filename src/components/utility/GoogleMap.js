/* global google */
// stops ESLint interference

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center  || { lat: 51.5074, lng: 0.1277},
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true,
      styles: mapStyles
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center || { lat: 51.5074, lng: 0.1277},
      animation: google.maps.Animation.DROP
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return (
      <div className='google-map' ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;


// this.mapCanvas contains the actual googlemap and its properties

// in the render function, we are assigning this.mapCanvas to element (which now contains the actual google map), then rendering the element in the div

// normally react resets values but google maps work differently so need to unmount and reset its gmaps values to prevent app from becoming slow

// if position or center is no specified, default will be london
