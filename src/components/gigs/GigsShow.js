import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class GigsShow extends Component {
  state = {
    gig: {
      venue: {}
    },
    user: {
      gigs: []
    }
  }

  // deleteGig = () => {
  //   Axios
  //     .delete(`/api/gigs/${this.props.match.params.id}`)
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    Axios
      .get(`/api/gigs/${this.props.match.params.id}`)
      .then(res => this.setState({ gig: res.data.results }), ()=> {
        console.log(this.state.gig);
      })
      .catch(err => console.log(err));
    Axios
      .get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));
  }

  userHasFavourited = () => {
    return this.state.user.gigs.length && this.state.user.gigs.some(gig => {
      // return true if one of the users gigs matches the skiddle id in the url
      return gig.skiddleId === this.props.match.params.id;
    });
  }

  trackGig = () => {
    console.log('clicked');
    console.log(this.state.gig);
    const gig = {
      name: this.state.gig.eventname,
      skiddleId: this.state.gig.id,
      image: this.state.gig.largeimageurl,
      date: this.state.gig.date
    };

    Axios
      .post('/api/gigs/favourite', gig, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }


  render() {
    return(
      <div>
        <p>Show Page</p>
        <div>
          <h3>{this.state.gig.eventname}</h3>
          <img src={this.state.gig.largeimageurl
          } />
          <h3>{ this.state.gig.date }</h3>
          <h4>Venue: { this.state.gig.venue.name }</h4>
          <h4>Entry Price: { this.state.gig.entryprice }</h4>
          <p>{ this.state.gig.description }</p>

          {!this.userHasFavourited() && <button onClick={this.trackGig}>
             Track
          </button>}
        </div>
      </div>
    );
  }
}

export default GigsShow;
