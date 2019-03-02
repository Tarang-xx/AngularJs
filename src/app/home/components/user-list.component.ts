import { UsersService } from '../services/user.service';
import './user.list.component.scss'

class UserListController {
  users: any[];
  gridOptions: any = null;
  constructor(
    private usersService: UsersService,
    private $state: angular.ui.IStateService
  ) {
    'ngInject';
    this.gridOptions = {
      paginationPageSizes: [5, 10, 15],
      paginationPageSize: 5,
      enableSorting: true,
      rowTemplate: `       
          <div ng-if="!row.entity.merge" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell></div>
             `,
      // data: this.users,
      columnDefs: [
        {
          name: 'Pic', field: 'avatar_url',
          cellTemplate: `<div class="ui-grid-cell-contents" title="TOOLTIP">
            <picture>
              <source media="(min-width: 650px)" srcset="{{row.entity.avatar_url}}">
              <source media="(min-width: 465px)" srcset="{{row.entity.avatar_url}}">
              <img src="{{row.entity.avatar_url}}" alt="Flowers" style="width:auto;">
            </picture>
          </div>` },
        { name: 'Name', field: 'login' },
        { name: 'UserId', field: 'id' },
        {
          name: 'Action',
          cellTemplate: `<div class="ui-grid-cell-contents" title="TOOLTIP">
          <button type="button" class="btn btn-primary" ng-click="grid.appScope.$ctrl.viewDetails(row.entity.id)">View Details</button>
        </div>` }
      ]
    };
  }

  $onInit() {
    this.fetchData();

  }
  private fetchData() {
    this.usersService.getUsers()
      .then(users => {
        this.users = users.data;
        this.gridOptions.data = this.users;
      });
  }

  private viewDetails(id: string) {
    this.$state.go('UserDetails', { id: id });
  }
}

export class UserListComponent implements angular.IComponentOptions {
  static selector = 'userListComponent';
  static controller = UserListController;
  static template = require('./user-list.component.html');
}
