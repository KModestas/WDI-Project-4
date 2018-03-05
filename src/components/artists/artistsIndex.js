import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';


class artistsIndex extends React.Component {
  state = {
    artist: []
  }

  componentWillMount() {
    Axios
      .get(`https://rest.bandsintown.com/artists/${this.props.artist}/events?app_id=euphoria`)
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input type="text" artist={this.state.artist} onChange={handleRequest} />
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
