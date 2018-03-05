import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



class GigsShow extends Component {
  state = {
    gig: {}
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
  }

  render() {
    return(
      <div>
        <p>Show Page</p>
        <div>
          <h3>{this.state.gig.eventname}</h3>
          

          <h3>{ this.state.gig.date }</h3>

          <button onClick={this.trackGig}>
             Track
          </button>
        </div>
      </div>
    );
  }
}

export default GigsShow;
