'use strict';

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {ipcMain} = electron;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });
  mainWindow.maximize();
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

ipcMain.on('nav/toggleURLFocus', (event, arg) => {
  mainWindow.send('nav/toggleURLFocus');
});
