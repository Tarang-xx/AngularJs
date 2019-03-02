// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import { Login } from './login.component';

/**
 * Import Module Routing
 */
import { routing } from './login.routes';

export const moduleName =
  angular.module('application.login', [
    'ui.router'
  ])

    /**
     * Register Module Components
     */
    .component(Login.selector, Login)


    /**
     * Register Module Services
     */
    // .service(ContactsService.selector, ContactsService)

    /**
     * Register Module Configuration
     */
    .config(routing)
    .name;
