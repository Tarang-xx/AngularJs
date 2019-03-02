// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { App } from './app.component';

/**
 * Import Module Configuration
 */
import { configuration } from './app.configuration';
import { routing } from './app.routes';
import { moduleName as loginModule } from './login/login.module';
import { moduleName as HomeModule } from './home/home.module';
import { AuthenticationService } from './services/authentication.service';
import * as $ from 'jquery';

function runFunc($rootScope: any, $location: any, $http: any, $state: angular.ui.IStateService, $transitions: any) {
  // keep user logged in after page refresh
  $rootScope.globals = {};
  if ($rootScope.globals.currentUser) {
    // $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata;
  }

  $rootScope.$on('$locationChangeStart', function (event: any, next: any, current: any) {
    // redirect to login page if not logged in and trying to access a restricted page
    var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restrictedPage && !loggedIn) {
      event.preventDefault();
      $state.transitionTo('logins', {
        location: true,
        inherit: true,
        relative: $state.$current,
        notify: false
      })
    }
  });
}

export const moduleName =
  angular.module('application', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ngMaterial',
    loginModule,
    HomeModule
  ])

    /**
     * Register Module Components
     */
    .component(App.selector, App)
    .service(AuthenticationService.selector, AuthenticationService)
    /**
     * Register Module Configuration
     */
    .config(configuration)
    .config(routing)
    .run(runFunc)
    .name;

