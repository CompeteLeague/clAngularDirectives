var clTable = angular.module('cl.table', []);

clTable.directive('clTable', function() {
  return {
    templateUrl: 'clTable.html',
    // templateUrl: 'clTable.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.isObject = function (input) {
        return angular.isObject(input);
      };
    }
  };
});
