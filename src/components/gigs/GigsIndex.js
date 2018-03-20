import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SearchBar from '../utility/SearchBar';

// import Auth from '../../lib/Auth';


class GigsIndex extends React.Component {
  state = {
    gigs: [],
    query: ''

  }

  componentDidMount() {
    Axios
      .get('/api/gigs')
      .then(res => this.setState({ gigs: res.data.results }, ()=> {
        console.log(this.state.gigs);
      }))
      .catch(err => console.log(err));
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }

  render() {
    console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
    const query = this.state.query;
    const regex = new RegExp(query, 'i');
    const filteredGigs =_.filter(this.state.gigs, (gig) => regex.test(gig.eventname));

    return (
      <div>
        <SearchBar handleSearch={ this.handleSearch } />
        <div className="block">
          {filteredGigs.map(gig => {
            return(
              <div key={gig.id}>
                <Link to={`/gigs/${gig.id}`}>
                  <h3>{gig.eventname}</h3>
                </Link>
                <Link to={`/gigs/${gig.id}`}>
                  <img src={gig.largeimageurl
                  } />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// link passes in the id of the gig so that it can also be accessed in GigsShow component as props

export default GigsIndex;
