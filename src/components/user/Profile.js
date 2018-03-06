import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Profile extends Component {
  state = {
    user: { gigs: [] }
  }

  componentDidMount() {
    Axios
      .get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h2>Hello {this.state.user.username}, these are all of the Gigs you are tracking.</h2>
        { this.state.user.gigs.map(gig => (
          <div key={gig.id}>
            <Link to={'/gigs/' + gig.skiddleId}><h2>{ gig.name }</h2></Link>
            <img src={gig.image} />
            <h3>{ gig.date }</h3>
            {/* <h4>Entry Price: { gig.entryprice }</h4>
            <h4>Minimum Age: { gig.minage }</h4> */}
          </div>
        ))
        }
      </div>
    );
  }
}

export default Profile;
