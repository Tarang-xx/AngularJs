
function UserDetailsController(
  usersService,
  $state,
  $stateParams,
  $scope
) {
  
  $scope.fetchData = function (id) {
    usersService.getUserDetails(id)
      .then(user => {
        $scope.user = user.data;

      });
  }
  $scope.fetchData($stateParams.id);
}

export default UserDetailsController;

