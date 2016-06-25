'use strict';

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
