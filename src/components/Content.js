import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <webview id="content-view"
               preload="src/navigation.js"
               src="../assets/static/new-tab.html">
      </webview>
    );
  }
}

export default Content;
