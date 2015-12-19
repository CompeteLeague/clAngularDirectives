/*!
 * CLAngularJSclTable
 *
 * Version: 1.0.0 - 2015-12-19T09:36:29.690Z
 * License: MIT
 */


(function() {
  "use strict";
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
        scope.isObject = function(input) {
          return angular.isObject(input);
        };
      }
    };
  });

}());
angular.module("cl.table").run(["$templateCache", function($templateCache) {
  $templateCache.put("clTable.html", "<table class=\"table\"><tr><th ng-repeat=\"headline in options.heading\">{{headline}}</th></tr><tr ng-repeat=\"item in options.content\"><td ng-repeat=\"attribute in options.contentAttributes\"><span ng-if=\"!isObject(item[attribute])\">{{item[attribute]}}</span> <button ng-if=\"isObject(item[attribute])\" ng-click=\"item[attribute].fn(item)\" class=\"btn btn-sm btn-primary\">{{item[attribute].display}}</button></td></tr></table>");
}]);
