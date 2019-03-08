
const userListTemp =require('./user/user-list.template.html');
const userDetailsTemp =require('./user/user-details.template.html');

 const routing = ($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('UserList', {  
      parent: 'app',
      url: '/user/list',
      template: userListTemp
    })

    .state('UserDetails', {
      parent: 'app',
      url: '/user/details/:id',
      template: userDetailsTemp
    });
};

export default  routing;