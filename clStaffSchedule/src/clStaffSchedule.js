var clStaffSchedule = angular.module('cl.staffSchedule', []);

clStaffSchedule.directive('clStaffSchedule', function() {
  return {
    templateUrl: 'clStaffSchedule.html',
    // templateUrl: 'clStaffSchedule.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.isArray = function (item) {
        return angular.isArray(item);
      };
    }
  };
});
