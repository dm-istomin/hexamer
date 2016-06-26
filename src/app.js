const electron = require('electron');
const {ipcRenderer} = electron;

const navbar = document.getElementById('navbar');
const mainView = document.getElementById('content-view');

// Forward all messages from guest window to host.
mainView.addEventListener('console-message', (e) => {
  console.log(`webview console: ${e.message}`)
});


ipcRenderer.on('nav/toggleURLFocus', (event, arg) => {
  navbar.focus();
});

navbar.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    mainView.loadURL(e.target.value);
    e.target.blur();
    mainView.focus();
  }
  if (e.keyCode === 27) { e.target.blur(); mainView.focus(); }
});
