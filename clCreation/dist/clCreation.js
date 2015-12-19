/*!
 * CLAngularJSclTable
 * 
 * Version: 1.0.0 - 2015-12-19T09:17:04.523Z
 * License: MIT
 */


(function () { 
"use strict";
var clCreation = angular.module('cl.creation', []);

clCreation.directive('clCreation', function() {
  return {
    // templateUrl: 'clCreation.html',
    templateUrl: 'bower_components/cl-angular-directives/clCreation/dist/clCreation.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.applyDataTemplate = function(dataTemplate) {
        var obj = this.options.dataTemplates[dataTemplate.trim()];
        angular.forEach(this.options.inputs, function(item) {
          if (obj[item.inputKey]) {
            if (item.inputType === 'checkbox') {
              angular.forEach(item.inputOptions, function(optionsItem) {
                if (obj[item.inputKey].value[optionsItem.inputOption]) {
                  optionsItem.inputModel = obj[item.inputKey].value[optionsItem.inputOption];
                } else {
                  optionsItem.inputModel = '';
                }
              });
            } else {
              item.inputModel = obj[item.inputKey].value;
            }
          } else {
            if (item.inputType === 'checkbox') {
              angular.forEach(item.inputOptions, function(optionsItem) {
                optionsItem.inputModel = '';
              });
            } else {
              item.inputModel = '';
            }
          }
        });
      };
      scope.generateCreationObject = function () {
        var creationObj = {};
        angular.forEach(this.options.inputs, function (item) {
          creationObj[item.inputKey] = item.inputModel;
        });
        return creationObj;
      };
    }
  };
});

}());
angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("clCreation.html","<h2>{{options.title}}</h2><b>provided templates:</b><div class=\"form-group\"><select class=\"form-control\" ng-model=\"selectedDataTemplate\"><option ng-repeat=\"(key, value) in options.dataTemplates\">{{key}}</option></select><button class=\"btn btn-sm btn-primary\" ng-click=\"applyDataTemplate(selectedDataTemplate)\">Apply Data Template</button></div><form role=\"form\" name=\"clCreationForm\" novalidate=\"\"><div class=\"cl-creation-inputs\"><div ng-repeat=\"clInput in options.inputs\"><div class=\"form-group\"><label>{{clInput.inputLabel}} <span ng-if=\"clInput.inputIsRequired\">*</span></label><div ng-if=\"clInput.inputType===\'text\'\"><input class=\"form-control\" type=\"text\" placeholder=\"{{clInput.inputPlaceholder}}\" ng-model=\"clInput.inputModel\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"></div><div ng-if=\"clInput.inputType===\'number\'\"><input class=\"form-control\" type=\"number\" placeholder=\"{{clInput.inputPlaceholder}}\" ng-model=\"clInput.inputModel\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"></div><div ng-if=\"clInput.inputType===\'textarea\'\"><textarea class=\"form-control\" placeholder=\"textarea\" ng-model=\"clInput.inputModel\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"></textarea></div><div ng-if=\"clInput.inputType===\'radio\'\"><div ng-repeat=\"clOption in clInput.inputOptions\"><input type=\"radio\" ng-model=\"clInput.inputModel\" value=\"{{clOption}}\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"> {{clOption}}</div></div><div ng-if=\"clInput.inputType===\'checkbox\'\"><div ng-repeat=\"clOption in clInput.inputOptions\"><input type=\"checkbox\" ng-model=\"clOption.inputModel\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"> {{clOption.inputOption}}</div></div><div ng-if=\"clInput.inputType===\'select\'\"><select class=\"form-control\" ng-model=\"clInput.inputModel\" ng-disabled=\"!clInput.inputIsActive\" ng-required=\"clInput.inputIsRequired\"><option ng-repeat=\"clOption in clInput.inputOptions\">{{clOption}}</option></select></div></div></div></div><i>Fields marked with an asterisk (*) are required</i><br><button ng-click=\"options.create(generateCreationObject())\" class=\"btn btn-primary\" ng-disabled=\"clCreationForm.$invalid\">{{options.buttonLabel}}</button></form>");}]);