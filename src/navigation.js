const ipcRenderer = require('electron').ipcRenderer;

var electron = {
  ipc: ipcRenderer
};

browser = {
  sendMessage: function(content) {
    electron.ipc.send('webview/logging', content);
  },
  toggleNav: function() {
    electron.ipc.send('nav/toggleURLFocus');
  }
};

function inputFocused() {
  return document.activeElement.tagName == 'INPUT';
}


document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.keyCode === 79) {
    if (!inputFocused()) {
      browser.toggleNav();
    }
  }

  if (e.keyCode === 27 && inputFocused()) {
    document.activeElement.blur();
  }

  if (e.keyCode === 74 && !inputFocused()) {
    window.scrollBy(0, 50);
  }

  if (e.keyCode === 75 && !inputFocused()) {
    window.scrollBy(0, -50);
  }
})
