// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import {UserListComponent } from './components/user-list.component';
import {UserDetailsComponent } from './components/user-details.component';



/**
 * Import Module Services
 */
import { UsersService } from './services/user.service';

/**
 * Import Module Routing
 */
import { routing } from './home.routes';

export const moduleName =
  angular.module('application.home', [
      'ui.router',
      'ui.grid',
  ])

  /**
   * Register Module Components
   */
  .component(UserListComponent.selector, UserListComponent)
  .component(UserDetailsComponent.selector, UserDetailsComponent)

 

  /**
   * Register Module Services
   */
  .service(UsersService.selector, UsersService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
