
import routing from './home.routes';
import UsersService from './services/user.service';
import UserListController from './user/user-list.controller';
import UserDetailsController from './user/user-details.controller';


  angular.module('application.home', [
      'ui.router',
      'ui.grid',
  ])
  .service('usersService',UsersService)
  .controller('userListController',UserListController)
  .controller('userDetailsController',UserDetailsController)
  .config(routing);
