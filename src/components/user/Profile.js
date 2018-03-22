import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import _ from 'lodash';


class Profile extends Component {
  state = {
    user: { gigs: [] },
    sortBy: 'date',
    sortDirection: 'asc'
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

    const { sortBy, sortDirection } = this.state;
    const orderedGigs = _.orderBy(this.state.user.gigs, [sortBy], [sortDirection]);

    return(
      <div className="block">
        <h2 className="green">Hello {this.state.user.username}, these are all of the Gigs you are tracking (In Order of Date)</h2>
        { orderedGigs.map(gig => (
          <div key={gig.id}>
            <Link to={'/gigs/' + gig.skiddleId}><h2>{ gig.name }</h2></Link>
            <Link to={`/gigs/${gig.skiddleId}`}>
              <img src={gig.image} />
            </Link>
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

// first makes axios request to profile route in backend, sends the token in the header so that it can bypass the secureRoute.
// runs the users show function in backend which finds the current user in DB using the id (has access to id from the secureroute) then returns the user data as JSON.
// this gives us access to all the referenced gigs schema on the user schema.
