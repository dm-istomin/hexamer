'use strict';

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object; if you don't, the window will be closed
// automatically when the JavaScript object is garbage collected.

let mainWindow

function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({ width: 1024, height: 768 })

  let startURL

  switch (process.env.HEXAMER_ENV) {
    case 'dev':
      startURL = url.format({
        protocol: 'http',
        host: 'localhost:8001',
        pathname: 'index.html',
        slashes: true
      })

      mainWindow.loadURL(startURL)

      // Open the DevTools
      mainWindow.webContents.openDevTools()
      break;
    case 'prod':
      startURL = url.format({
        protocol: 'file',
        host: path.join(__dirname, 'dist', 'index.html'),
        slashes: true
      })

      mainWindow.loadURL(startURL)
      break;
    default:
      console.error(`Error: Unknown environment ${process.env.HEXAMER_ENV}`)

  }

  // and load the index.html of the app.

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron hase finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (mainWindow === null) {
    createWindow()
  }
})
