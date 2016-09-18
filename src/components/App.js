require('../../assets/styles/main.scss');

import React from 'react';

import Navigation from './Navigation';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <main id="app">
        <Navigation />
        <Content />
      </main>
    );
  }
}

export default App;
