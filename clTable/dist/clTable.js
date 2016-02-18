/*!
 * CLAngularJSclTable
 * 
 * Version: 1.0.0 - 2016-02-18T18:45:01.351Z
 * License: MIT
 */


(function () { 
"use strict";
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

}());
angular.module("cl.table").run(["$templateCache", function($templateCache) {$templateCache.put("clTable.html","<div ng-if=\"options.searchable\"><div class=\"form-group\" ng-repeat=\"item in options.contentAttributes\"><label>{{options.heading[$index]}}</label> <input type=\"text\" class=\"form-control\" ng-model=\"searchItem[item]\"></div></div><table class=\"table\"><tr><th ng-repeat=\"headline in options.heading\" ng-click=\"sort($index)\">{{headline}}</th></tr><tr ng-repeat=\"item in options.content | orderBy:sortType:sortReverse | filter:searchItem\"><td ng-repeat=\"attribute in options.contentAttributes\"><span ng-if=\"!isObject(item[attribute])\">{{item[attribute]}}</span> <button ng-if=\"isObject(item[attribute])\" ng-click=\"item[attribute].fn(item)\" class=\"btn btn-sm btn-primary\">{{item[attribute].display}}</button></td></tr></table>");}]);