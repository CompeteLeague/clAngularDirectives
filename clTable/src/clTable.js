var clTable = angular.module('cl.table', []);

clTable.directive('clTable', function() {
  return {
    templateUrl: 'clTable.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.searchItem = {};
      scope.sortType = scope.options.contentAttributes[0];
      scope.sortReverse = false;
      scope.sort = function (index) {
        scope.sortType = scope.options.contentAttributes[index];
        scope.sortReverse = !scope.sortReverse;
      };
      scope.isObject = function (input) {
        return angular.isObject(input);
      };
    }
  };
});
