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
        <h1>Hello {this.state.user.username}</h1>
        { this.state.user.gigs.map(gig => (
          <div key={gig.id}><Link to={'/gigs/' + gig.skiddleId}>{ gig.name }</Link></div>
        ))
        }
      </div>
    );
  }
}

export default Profile;
