import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';


class artistsIndex extends React.Component {
  state = {
    gigs: []
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
        {/* <input type="text" artist={this.state.artist} onChange={handleRequest} /> */}
        {/* {this.state.gigs.map(gig => {
          return(
            <div key={gig.id}>
              <Link to={`/gigs/${gig.id}`}>
                <img src={gig.image} />
              </Link>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default artistsIndex;
