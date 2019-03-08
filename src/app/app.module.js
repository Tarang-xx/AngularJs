
import * as $ from 'jquery';
import './login/login.module';
import './home/home.module';
import AuthenticationService from './services/authentication.service'
import AppController from './app.controller'

const appTemp = require('./app.template.html');
function runFunc($rootScope, $location, $state) {
  // keep user logged in after page refresh
  $rootScope.globals = {};
  if ($rootScope.globals.currentUser) {
    // $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata;
  }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in and trying to access a restricted page
    var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restrictedPage && !loggedIn) {
      event.preventDefault();
      $state.transitionTo('logins', {
        location: true,
        inherit: true,
        relative: $state.$current,
        notify: false
      })
    }
  });
}
export const configuration = ($locationProvider, $stateProvider, $urlRouterProvider) => {
  'ngInject';
  $locationProvider.hashPrefix('');
  var appState = {
    name: 'app',
    url: '/app',
    //abstract: true,
    template: appTemp

  }
  $stateProvider.state(appState);
  $urlRouterProvider.otherwise('/app/login');
};



angular.module('application.app', [
  'ui.router',
  'ui.grid',
  'ui.grid.pagination',
  'ngMaterial',
  'application.login',
  'application.home'
])
  .controller('appController',AppController)
  .config(configuration)
  .service('authenticationService', AuthenticationService)
  .run(runFunc)

