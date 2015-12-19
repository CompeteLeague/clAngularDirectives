var clThumbnail = angular.module('cl.thumbnail', []);

clThumbnail.directive('clThumbnail', function () {
  return {
    templateUrl: 'clThumbnail.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function (scope, element, attrs) {
      scope.isObject = function (input) {
        return angular.isObject(input);
      };
    }
  };
});
