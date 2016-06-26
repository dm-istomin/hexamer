const navbar = document.getElementById('navbar');
const mainView = document.getElementById('content-view');

navbar.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) { mainView.loadURL(e.target.value); }
})
