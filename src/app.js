import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

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
            <h1>Euphoria</h1>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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
