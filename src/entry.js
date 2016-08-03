require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <main id="app">
        <section id="navigation">
          <input id="navbar" type="text" placeholder="URL"></input>
        </section>
        <webview id="content-view" preload="src/navigation.js" src="src/new-tab.html">
        </webview>
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
