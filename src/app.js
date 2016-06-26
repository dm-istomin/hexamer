const navbar = document.getElementById('navbar');
const mainView = document.getElementById('content-view');

const scrollIncrement = 50;

// Forward all messages from guest window to host.
mainView.addEventListener('console-message', (e) => {
  console.log(`webview console: ${e.message}`)
});

document.onkeydown = (e) => {
  let navbarActive = document.activeElement.id === 'navbar';

  if (e.keyCode === 79) {
    if (!navbarActive) {
      e.preventDefault();
      navbar.focus();
    }
  }

  if (e.keyCode === 74 && !navbarActive) {
    mainView.executeJavaScript(`window.scrollBy(0, ${scrollIncrement})`);
  }

  if (e.keyCode === 75 && !navbarActive) {
    mainView.executeJavaScript(`window.scrollBy(0, -${scrollIncrement})`);
  }
}

navbar.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    mainView.loadURL(e.target.value);
    e.target.blur();
  }
  if (e.keyCode === 27) { e.target.blur(); }
});
