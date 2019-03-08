/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';

import './app/app.module'
import './index.css';

import './app/app.module';
const bootstrapModuleName = angular.module('application.bootstrap', [
  'application.app'
]);
