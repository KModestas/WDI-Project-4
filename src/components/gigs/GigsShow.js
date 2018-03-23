import React, { Component } from 'react';
import Axios from 'axios';


import Auth from '../../lib/Auth';
import GoogleMap from '../utility/GoogleMap';



class GigsShow extends Component {
  state = {
    gig: {
      venue: {}
    },
    user: {
      gigs: []
    },
    center: { lat: 51.5074, lng: 0.1277 }
  }


  // gets single gig from skiddle api
  componentDidMount() {
    Axios
      .get(`/api/gigs/${this.props.match.params.id}`)
      .then(res => this.setState({ gig: res.data.results }), ()=> {
        console.log(this.state.gig);
      })
      .catch(err => console.log(err));



    // gets users gigs (favourited gigs) in order to allow us to see wether this gig is in the users favourites down below
    Axios
      .get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));


  }

  // if user has gigs, it will some over them
  userIsTracking = () => {
    return this.state.user.gigs.length && this.state.user.gigs.some(gig => {
      // and return true if one of the users gigs matches the skiddle id in the url which will allow us to hide the track button below
      return gig.skiddleId === this.props.match.params.id;
    });
  }

  // makes post request which pushes the content of the gig into the user gigs array.

  trackGig = () => {
    console.log(this.state.gig);
    const gig = {
      name: this.state.gig.eventname,
      skiddleId: this.state.gig.id,
      image: this.state.gig.largeimageurl,
      date: this.state.gig.date
    };
    Axios
      .post('/api/gigs/track', gig, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
        this.props.history.push('/profile');
      })
      .catch(err => console.log(err));
  }


  unTrackGig = () => {
    console.log(this.state.gig.id);
    const gig = {
      id: this.state.gig.id
    };
    Axios
      .put('/api/gigs/track', gig, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
        this.props.history.push('/profile');
      })
      .catch(err => console.log(err));
  }

  render() {
    // const latitude = Number(this.state.gig.venue.latitude);
    // const longitude = Number(this.state.gig.venue.longitude);
    return(
      <div>
        <div className="marginDiv"></div>
        <div className="block">
          <h3>{this.state.gig.eventname}</h3>
          <img src={this.state.gig.largeimageurl
          } />
          <h3 className="offYellow">{ this.state.gig.date }</h3>
          <h4 className="offYellow">Venue: { this.state.gig.venue.name }</h4>
          <h4 className="offYellow">Entry Price: { this.state.gig.entryprice }</h4>
          <p className="offYellow">{ this.state.gig.description }</p>
          {/*  if user has not favourites, display the track button */}
          {!this.userIsTracking() && <button onClick={this.trackGig}>
             Track
          </button>}
          {this.userIsTracking() && <button onClick={this.unTrackGig}>
             Untrack
          </button>}
        </div>
        <GoogleMap center={this.state.center}/>
      </div>
    );
  }
}

export default GigsShow;
