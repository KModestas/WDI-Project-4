import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class GigsIndex extends React.Component {
  state = {
    gigs: []
  }

  componentDidMount() {
    Axios
      .get('/api/gigs')
      .then(res => this.setState({ gigs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <button>
            <Link to="/gigs/new">
            Add Gig
            </Link>
          </button>
        </div>
        {this.state.gigs.map(gig => {
          return(
            <div key={gig.id}>
              <Link to={`/gigs/${gig.id}`}>
                <img src={gig.image} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GigsIndex;
