require('../main.scss');

import React from 'react';

import Navbar from './Navbar';
import Content from './Content';

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

export default App;
