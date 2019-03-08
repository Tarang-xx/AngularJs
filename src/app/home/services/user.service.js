export default function UsersService($q,
  $http) {
  this.selector = 'usersService';
  this.baseAPIUrl = 'https://api.github.com';

  this.getUsers = () => {
    return $http(
      {
        url: `${this.baseAPIUrl}/users`
        , method: 'GET'
      }
    );
  }
  this.getUserDetails = (userId) => {
    return $http(
      {
        url: `${this.baseAPIUrl}/user/${userId}`
        , method: 'GET'
      }
    );
  }

}
