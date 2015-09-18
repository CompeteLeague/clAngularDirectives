var module = angular.module('example', ['cl.table']);

module.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.tableOptions = {
    content: [{
      name: 'Bronze/Silver Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      created: {
        date: '12.09.2015'
      }
    }, {
      name: 'Gold/Platinum Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      created: {
        date: '12.09.2015'
      }
    }, {
      name: 'Diamon/Above Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      created: {
        date: '12.09.2015'
      }
    }],
    heading: ['Name', 'Region', 'Type', 'Date'],
    contentAttributes: ['name', 'region', 'tournamenttype', 'created']
  };
}]);
