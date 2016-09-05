# Hexamer

A custom browser with Vi-like keybindings, built on top of Chromium and Electron.

## Installation

To run the application, it is necessary to have:

| Name                                                | Version |
| ----------------------------------------------------|-------- |
| [Node.js](https://nodejs.org/en/download/releases/) | > 6.0.0 |

After checking that the correct version of Node.js is installed, run `npm
install` to get all of the necessary dependencies.

## Running the App

If you don't care about live reloading, you can bundle the application by
running `npm build` and then opening the root directory with electron:
`./node_modules/electron-prebuilt/dist/electron .`.

For development, it is easier to have the application reload on any changes: run
`npm watch` and `npm start` in separate tabs. At the moment, the app will only
reload in response to changes in JavaScript or Sass files, to see changes to
HTML you have to restart the server.

Tests can be run with `npm test`.
