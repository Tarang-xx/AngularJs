import { Login } from './login.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('logins', {
      parent: 'app',
      url: '/login',
      component: Login.selector
    });
};
