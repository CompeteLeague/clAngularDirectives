var module = angular.module('example', ['cl.table']);

module.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.tableOptions = {
    content: [{
      name: 'Bronze/Silver Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      date: '12.09.2015',
      action: {
        display: 'Print It',
        fn: function () {
          console.log('Hello world!');
        }
      }
    }, {
      name: 'Gold/Platinum Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      date: '12.09.2015',
      action: {
        display: 'Print It',
        fn: function () {
          console.log('Hello world!');
        }
      }
    }, {
      name: 'Diamon/Above Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      date: '12.09.2015',
      action: {
        display: 'Print It',
        fn: function () {
          console.log('Hello world!');
        }
      }
    }],
    heading: ['Name', 'Region', 'Type', 'Date', 'Action'],
    contentAttributes: ['name', 'region', 'tournamenttype', 'date', 'action']
  };
}]);
