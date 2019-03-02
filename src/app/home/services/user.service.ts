export class UsersService {
  static selector = 'usersService';
  baseAPIUrl = 'https://api.github.com';

  constructor(
    private $q: angular.IQService,
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }
  getUsers = (): ng.IPromise<any> => {
    return this.$http(
      {
        url: `${this.baseAPIUrl}/users`
        , method: 'GET'
      }
    );
  }
  getUserDetails = (userId: string): ng.IPromise<any> => {
    return this.$http(
      {
        url: `${this.baseAPIUrl}/user/${userId}`
        , method: 'GET'
      }
    );
  }

}
