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
        },
        class: 'btn-primary'
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
        },
        class: 'btn-danger'
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
        },
        class: 'btn-warning'
      }
    }],
    heading: ['Name', 'Region', 'Type', 'Date', 'Action'],
    contentAttributes: ['name', 'region', 'tournamenttype', 'date', 'action'],
    searchable: true
  };
  $scope.tableOptionsMultiselect = {
    content: [{
      name: 'Bronze/Silver Season 1',
      region: 'NA',
      tournamenttype: 'Season Open',
      date: '12.09.2015',
      action: {
        display: 'Print It',
        fn: function () {
          console.log('Hello world!');
        },
        class: 'btn-primary'
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
        },
        class: 'btn-danger'
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
        },
        class: 'btn-warning'
      }
    }],
    heading: ['Name', 'Region', 'Type', 'Date', 'Action'],
    contentAttributes: ['name', 'region', 'tournamenttype', 'date', 'action'],
    searchable: true,
    multiselect: true,
    multiselectfunction: {
      name: 'My Super Duper Name',
      fn: function (items) {
        for (var i = 0; i < items.length; i++) {
          console.log(items[i]);
        }
      }
    }
  };
}]);
