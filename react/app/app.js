/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'sanitize.css/sanitize.css';

// Import root app
import App from 'components/App';

// Import Language Provider
// import LanguageProvider from 'components/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
eslint-enable import/no-unresolved, import/extensions */

// import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
// const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,

    MOUNT_NODE
  );
};

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
