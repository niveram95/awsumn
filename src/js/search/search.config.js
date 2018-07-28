function SearchConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.search', {
    url: '/',
    controller: 'SearchCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'item.html',
    title: 'Search'
  });

};

export default SearchConfig;
