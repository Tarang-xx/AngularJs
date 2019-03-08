//import { UsersService } from '../services/user.service';
import './user.list.css'

function UserListController(usersService, $state, uiGridConstants, $scope) {
  $scope.gridOptions = {
    paginationPageSizes: [5, 10, 15],
    paginationPageSize: 5,
    enableSorting: true,
    enableFiltering: true,
    rowTemplate: `       
          <div ng-if="!row.entity.merge" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell"  ui-grid-cell></div>
             `,
    //data: [],
    columnDefs: [
      {
        name: 'Pic', field: 'avatar_url',
        cellTemplate: `<div class="ui-grid-cell-contents" title="TOOLTIP">
            <picture>
              <source media="(min-width: 650px)" srcset="{{row.entity.avatar_url}}">
              <source media="(min-width: 465px)" srcset="{{row.entity.avatar_url}}">
              <img src="{{row.entity.avatar_url}}" alt="Flowers" style="width:auto;">
            </picture>
          </div>`,
        enableFiltering: false,
      },
      {
        name: 'UserId', field: 'id', sort: {
          direction: uiGridConstants.ASC,
          priority: 1
        },
        sortingAlgorithm: (a, b, rowA, rowB, direction) => {
          return a - b
        }
      },
      { name: 'Name', field: 'login' },
      {
        name: 'Action',
        cellTemplate: `<div class="ui-grid-cell-contents" title="TOOLTIP">
          <button type="button" class="btn btn-primary" ng-click="grid.appScope.viewDetails(row.entity.id)">View Details</button>
        </div>`,
        enableFiltering: false,
        enableSorting: false,
      }
    ],
    onRegisterApi: function (gridApi) {
      $scope.grid1Api = gridApi;
    }
  };
 
  $scope.fetchData = function () {
    usersService.getUsers()
      .then(users => {
        $scope.users = users.data;
        $scope.gridOptions.data = $scope.users;
       setTimeout(()=>$scope.$digest()) 
      });
  }
  $scope.fetchData();
  $scope.viewDetails = function (id) {
    $state.go('UserDetails', { id: id });
  }
}


export default  UserListController;