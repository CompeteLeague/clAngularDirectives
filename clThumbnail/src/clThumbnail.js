var clThumbnail = angular.module('cl.thumbnail', []);

clThumbnail.directive('clThumbnail', function () {
  return {
    restrict: 'E',
    scope: {
      options: '=options'
    },
    // templateUrl: 'clThumbnail.html',
    templateUrl: 'bower_components/cl-angular-directives/clThumbnail/dist/clThumbnail.html',
    link: function (scope, element, attrs) {
      console.log('options', scope.options);
    }
  };
});
