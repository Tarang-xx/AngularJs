
import { routing } from './login.routes';
import LoginController from './login.controller';
import AuthenticationService from '../services/authentication.service'

angular.module('application.login', [
  'ui.router'
])
  .controller('loginController', LoginController)
  .service('authenticationService', AuthenticationService)
  .config(routing);
