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
