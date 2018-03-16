/* global google */
// stops ESLint interference

import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09},
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true
    });
  }

  render() {
    return (
      <div className='google-map' ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;
