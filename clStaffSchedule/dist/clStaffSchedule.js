/*!
 * CLAngularJSclStaffSchedule
 * 
 * Version: 1.0.0 - 2015-12-19T09:37:02.106Z
 * License: MIT
 */


(function () { 
"use strict";
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

}());
angular.module("cl.staffschedule").run(["$templateCache", function($templateCache) {$templateCache.put("clStaffSchedule.html","<div class=\"schedule\"><div ng-repeat=\"day in options.weekdays\" class=\"weekday\">{{::day.name}}<div ng-repeat=\"timeSlot in day.timeSlots\"><div ng-if=\"isArray(timeSlot.class)\"><div class=\"cell-split\">{{::timeSlot.name}}:00<div class=\"pull-left\" ng-class=\"timeSlot.class[0]\"><span ng-if=\"timeSlot.users\"><br><span ng-repeat=\"user in timeSlot.users[0]\">{{::user}}</span></span></div><div class=\"pull-right\" ng-class=\"timeSlot.class[1]\"><span ng-if=\"timeSlot.users\"><br><span ng-repeat=\"user in timeSlot.users[1]\">{{::user}}</span></span></div></div></div><div ng-hide=\"isArray(timeSlot.class)\"><div class=\"cell\" ng-class=\"timeSlot.class\">{{::timeSlot.name}}:00 <span ng-if=\"timeSlot.users\"><br><span ng-repeat=\"user in timeSlot.users\">{{::user}}</span></span></div></div></div></div></div>");}]);