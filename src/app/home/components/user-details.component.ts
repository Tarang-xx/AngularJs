import { UsersService } from './../services/user.service';

class UserDetailsController {
  user: any;
  constructor(
    private usersService: UsersService,
    private $state: angular.ui.IStateService,
    private $stateParams: angular.ui.IStateParamsService
  ) {
    'ngInject';
  }

  $onInit() {
    this.fetchData(this.$stateParams.id);
  }
  private fetchData(id: string) {
    this.usersService.getUserDetails(id)
      .then(user => {
        this.user = user.data;

      });
  }
}

export class UserDetailsComponent implements angular.IComponentOptions {
  static selector = 'userDetails';
  static controller = UserDetailsController;
  static template = require('./user-details.component.html');
}
