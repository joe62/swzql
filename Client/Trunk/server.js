const chokidar = require('chokidar');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {exec} = require('child_process');
const express = require('express');

const APP_PORT = 3000;
const GRAPHQL_PORT = 8080;

let appServer;

function startAppServer(callback) {
  // Serve the Relay app
  const compiler = webpack({
    entry: path.resolve(__dirname, 'js', 'app.js'),
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel',
          test: /\.js$/,
        }
      ]
    },
    output: {filename: 'app.js', path: '/'}
  });
  appServer = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    contentBase: '/public/',
    proxy: {'/graphql': `http://u16041:${GRAPHQL_PORT}`},
    publicPath: '/js/',
    stats: {colors: true}
  });
  // Serve static resources
  appServer.use('/', express.static(path.resolve(__dirname, 'public')));
  appServer.listen(APP_PORT, () => {
    console.log(`App is now running on http://u16041:${APP_PORT}`);
    if (callback) {
      callback();
    }
  });
}


function startServers(callback) {
  // Shut down the servers
  if (appServer) {
    appServer.listeningApp.close();
  }

  // Compile the schema
  exec('npm run update-schema', (error, stdout) => {
    console.log(stdout);
    let doneTasks = 0;
    function handleTaskDone() {
      doneTasks++;
      if (doneTasks === 2 && callback) {
        callback();
      }
    }
    startAppServer(handleTaskDone);
  });
}

startServers();
