import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



class GigsShow extends Component {
  state = {
    gig: {}
  }

  deleteGig = () => {
    Axios
      .delete(`/api/gigs/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/gigs/${this.props.match.params.id}`)
      .then(res => this.setState({ gig: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div>
          <img src={this.state.gig.image} />
        </div>
        <div>
          <h2>{ this.state.gig.title}</h2>
          <h3>{ this.state.gig.location }</h3>
          <h3>{ this.state.gig.date }</h3>

          <button>
            <Link to={`/gigs/${this.state.gig.id}/edit`} >
                Edit
            </Link>
          </button>
          <button onClick={this.deleteGig}>
             Delete
          </button>
        </div>
      </div>
    );
  }
}

export default GigsShow;
