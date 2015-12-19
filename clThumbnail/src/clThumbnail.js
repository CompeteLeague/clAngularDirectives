var clThumbnail = angular.module('cl.thumbnail', []);

clThumbnail.directive('clThumbnail', function () {
  return {
    templateUrl: 'clThumbnail.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function (scope, element, attrs) {
      console.log('options', scope.options);
    }
  };
});
