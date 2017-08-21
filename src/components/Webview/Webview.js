import React, { Component } from 'react';

import { Row, Col, Form, Input } from 'antd';

let webviewEl = null;
let urlForm = null;

class Webview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://news.ycombinator.com',
      urlInput: 'https://news.ycombinator.com'
    };
  }

  componentDidMount() {
    webviewEl = document.getElementById('web-view');
    urlForm = document.getElementById('url-form');
    console.log('urlForm:', urlForm)
    document.onkeydown = (e) => {
      if (e.keyCode === 79) {
        console.log('o pressed!')
        console.log('active el:', document.activeElement);
        if (document.activeElement.id === 'url-form') {
          e.stopPropogation();
        } else {
          urlForm.focus();
        }
      }

      if (e.keyCode === 27) {
        console.log('Esc pressed!')
        console.log('active el:', document.activeElement);
        if (document.activeElement.id === 'url-form') {
          webviewEl.focus()
        }
      }
    }

    webviewEl.addEventListener(
      'ipc-message',
      e => console.log(e.channel)
    );
    webviewEl.addEventListener(
      'console-message',
      e => console.log('>> Webview console:', e.message)
    );
    webviewEl.addEventListener(
      'did-navigate',
      e => this.setState({urlInput: e.url })
    );
    webviewEl.addEventListener(
      'did-navigate-in-page',
      e => this.setState({urlInput: e.url })
    );
    webviewEl.addEventListener(
      'did-start-loading',
      () => {
        webviewEl.executeJavaScript(
          `
          pingHost();
          document.onkeydown = (e) => {
            if (e.keyCode === 74 && !(document.activeElement.tagName.toLowerCase() in ['input', 'textarea'])) {
              window.scrollBy(0, 100);
            }
            if (e.keyCode === 75 && !(document.activeElement.tagName.toLowerCase() in ['input', 'textarea'])) {
              window.scrollBy(0, -100);
            }
            if (e.keyCode === 79) {
              if (document.activeElement.tagName.toLowerCase() in ['input', 'textarea']) {
                console.log('trying to stop propogation!');
                e.stopPropogation();
              } else {
                console.log('window blur!');
                window.blur();
              }
            }
          };
          `
        )
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({url: this.state.urlInput })
  }

  updateURL(e) {
    this.setState({urlInput: e.target.value});
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Item>
                <Input
                  id="url-form"
                  placeholder="URL"
                  size="small"
                  value={this.state.urlInput}
                  onChange={e => this.updateURL(e)}
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
              <webview
                id="web-view"
                src={this.state.url}
                style={{minHeight: '90vh', border: '1px solid black'}}
              >
              </webview>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Webview;
