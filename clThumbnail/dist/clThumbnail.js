/*!
 * CLAngularJSclThumbnail
 * 
 * Version: 1.0.0 - 2015-12-19T10:45:35.006Z
 * License: MIT
 */


(function () { 
"use strict";
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

}());
angular.module("cl.thumbnail").run(["$templateCache", function($templateCache) {$templateCache.put("clThumbnail.html","<div class=\"thumbnail\"><img src=\"\" ng-src=\"{{options.imageUrl}}\" title=\"{{options.firstName}} {{options.lastName}}\"><div class=\"caption\"><h4>{{options.firstName}} <b>\'{{options.nickName}}\'</b> {{options.lastName}}</h4><p>{{options.infoText}}</p><p class=\"textCentered label label-cl\">{{options.email}}</p></div></div>");}]);