import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SearchBar from '../utility/SearchBar';

// import Auth from '../../lib/Auth';


class GigsIndex extends React.Component {
  state = {
    gigs: [],
    sortBy: 'eventname',
    sortDirection: 'asc',
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


  //
  // loadMore() {
  //   const limit = {
  //     limit: 50
  //   };
  //
  //   Axios
  //     .put('/api/gigs', limit)
  //     .then(res => this.setState({ gigs: res.data.results }, ()=> {
  //       console.log(res);
  //     }))
  //     .catch(err => console.log(err));
  // }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  // *** FILTERING ***
  // creating a new regex expression and passing in query (value of input field your type your search in)
  // 'i' makes it case insensitive
  // using lodash _filter method to filter over gigs array and using the regex i made to filter for gig.eventname

  render() {

    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedGigs = _.orderBy(this.state.gigs, [sortBy], [sortDirection]);

    const filteredGigs =_.filter(orderedGigs, (gig) => regex.test(gig.eventname));

    return (
      <div>
        <SearchBar handleSort={this.handleSort} handleSearch={ this.handleSearch } />
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
        {/* <button onClick={this.loadMore}>Load More</button> */}
      </div>
    );
  }
}

// link passes in the id of the gig so that it can also be accessed in GigsShow component as props

export default GigsIndex;
