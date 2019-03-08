
import { routing } from './login.routes';
import LoginComponent from './login.controller';
import AuthenticationService from '../services/authentication.service'

angular.module('application.login', [
  'ui.router'
])
  .controller('loginComponent', LoginComponent)
  .service('authenticationService', AuthenticationService)
  .config(routing);
