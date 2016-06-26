const navbar = document.getElementById('navbar');
const mainView = document.getElementById('content-view');

document.onkeydown = (e) => {
  if (e.keyCode === 79) {
    if (document.activeElement.id != 'navbar') {
      e.preventDefault();
      navbar.focus();
    }
  }
}

navbar.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    mainView.loadURL(e.target.value);
    e.target.blur();
  }
  if (e.keyCode === 27) { e.target.blur(); }
});
