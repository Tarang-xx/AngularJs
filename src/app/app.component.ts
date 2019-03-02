/**
 * Import the Component styles
 */
import './app.component.scss';
class AppComponent {
    constructor(public $rootScope: any) {
    }
}
export class App implements angular.IComponentOptions {
    static selector = 'app';
    static template = require('./app.component.html');
    static controller = AppComponent;
}

