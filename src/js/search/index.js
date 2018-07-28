import angular from 'angular';

// Create the module where our functionality can attach to
let searchModule = angular.module('app.search', []);

// Include our UI-Router config settings
import SearchConfig from './search.config';
searchModule.config(SearchConfig);


// Controllers
import SearchCtrl from './search.controller';
searchModule.controller('SearchCtrl', SearchCtrl);

export default searchModule;
