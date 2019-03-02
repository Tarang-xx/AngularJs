/**
 * Import the Component styles
 */
import './login.component.scss';
import { AuthenticationService } from '../services/authentication.service';



class LoginComponent {
    dataLoading: any;
    username: any;
    password: any;
    constructor(private authenticationService: AuthenticationService, private $state: angular.ui.IStateService) {

    }
    $onInit = function () {
        // this.$state.go('userList');
        this.authenticationService.ClearCredentials();
    };

    login() {
        let _self = this;
        this.dataLoading = true;
        this.authenticationService.Login(this.username, this.password).then((response: any) => {
            if (response.success) {
                _self.authenticationService.SetCredentials(_self.username, _self.password);
                _self.$state.go('UserList');
            } else {
                _self.dataLoading = false;
            }
        });
    }
}


export class Login implements angular.IComponentOptions {
    static selector = 'login';
    static template = require('./login.component.html');
    static controller = LoginComponent;

}
