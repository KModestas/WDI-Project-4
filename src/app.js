import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import GigsIndex from './components/gigs/GigsIndex';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/utility/Navbar';


import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Switch>
              <Route exact path="/" component={GigsIndex} />
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
