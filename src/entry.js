const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: () => {
    return <h1>Hello world from React!</h1>;
  }
});

ReactDOM.render(<App/>, document.getElementById('react-root'));
