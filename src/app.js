import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <h1>Euphoria</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
