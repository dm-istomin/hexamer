require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <main id="app">
        <Navbar />
        <Content />
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
