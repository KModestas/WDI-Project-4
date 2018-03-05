import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';


class artistsIndex extends React.Component {
  state = {
    gigs: {
      results: []
    }
  }

  componentDidMount() {
    Axios
      .get('/api/gigs')
      .then(res => this.setState({ gigs: res.data }, ()=> {
        console.log(this.state.gigs);
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>index page</p>

        {this.state.gigs.results.map(gig => {
          return(
            <div key={gig.id}>
              <h3>{gig.eventname}</h3>
              <Link to={`/gigs/${gig.id}`}>
                <img src={gig.largeimageurl
                } />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default artistsIndex;
