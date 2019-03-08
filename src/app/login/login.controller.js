
import './login.css';

function LoginComponent(authenticationService, $state, $scope) {
    $scope.$onInit = function () {
        // this.$state.go('userList');
        authenticationService.ClearCredentials();
    };
    $scope.$onInit();
    $scope.login = function () {
        $scope.dataLoading = true;
        authenticationService.Login($scope.username, $scope.password).then((response) => {
            if (response.success) {
                authenticationService.SetCredentials($scope.username, $scope.password);
                $state.go('UserList');
            } else {
                $scope.dataLoading = false;
            }
        });
    }
}



export default LoginComponent;



