require('./main.scss');

const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: () => {
    return (
      <main id="app">
        <section id="navigation">
          <input id="navbar" type="text" placeholder="URL"></input>
        </section>
        <webview id="content-view" preload="./navigation.js" src="new-tab.html">
        </webview>
      </main>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
