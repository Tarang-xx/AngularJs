import {UserListComponent } from './components/user-list.component';
import {UserDetailsComponent } from './components/user-details.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('UserList', {  
      parent: 'app',
      url: '/user/list',
      component: UserListComponent.selector
    })

    .state('UserDetails', {
      parent: 'app',
      url: '/user/details/:id',
      component: UserDetailsComponent.selector
    });
};
