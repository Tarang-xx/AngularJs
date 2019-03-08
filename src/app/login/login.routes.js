

const loginTemp =require('./login.template.html');
export const routing = ($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('logins', {
      parent: 'app',
      url: '/login',
      template: loginTemp
    });
};
