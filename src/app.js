import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Axios from 'axios';

import GigsIndex from './components/gigs/GigsIndex';
import GigsShow from './components/gigs/GigsShow';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/utility/Navbar';
import Profile from './components/user/Profile';


import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
            <h2> Live Music In London </h2>
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Switch>
              <Route exact path="/" component={GigsIndex} />
              <Route path="/profile" component={Profile} />
              <Route path="/gigs/:id" component={GigsShow} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
