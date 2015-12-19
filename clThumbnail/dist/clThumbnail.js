/*!
 * CLAngularJSclThumbnail
 * 
 * Version: 1.0.0 - 2015-12-19T09:14:57.843Z
 * License: MIT
 */


angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("clThumbnail.html","<div class=\"thumbnail\"><img src=\"\" ng-src=\"{{options.imageUrl}}\" title=\"{{options.firstName}} {{options.lastName}}\"><div class=\"caption\"><h4>{{options.firstName}} <b>\'{{options.nickName}}\'</b> {{options.lastName}}</h4><p>{{options.infoText}}</p><p class=\"textCentered label label-cl\">{{options.email}}</p></div></div>");}]);
(function () { 
"use strict";
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

}());