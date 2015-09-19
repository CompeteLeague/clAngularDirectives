var clCreation = angular.module('cl.creation', []);

clCreation.directive('clCreation', function() {
  return {
    templateUrl: 'clCreation.html',
    restrict: 'E',
    scope: {
      options: '=options'
    },
    link: function(scope, element, attrs) {
      scope.applyDataTemplate = function(dataTemplate) {
        var a = 'a';
        console.log('options.dataTemplates', this.options.dataTemplates);
        console.log('dataTemplate:', dataTemplate.trim());
        console.log('a: ', a);
        console.log('is String dataTemplate', angular.isString(dataTemplate.trim()));
        console.log('is String a', angular.isString(a));
        console.log('length a ', a.length);
        console.log('length dataTemplate ', dataTemplate.trim().length);
        console.log('vergleich a und dataTemplate', a === dataTemplate.trim());
        var obj = this.options.dataTemplates[a];
        console.log('obj', obj);
        console.log('options.dataTemplates[dataTemplate]', this.options.dataTemplates[dataTemplate.trim()]);
        angular.forEach(this.options.inputs, function(item) {
          if (dataTemplate[item.inputLabel]) {
            if (item.inputType === 'checkbox') {
              angular.forEach(item.inputOptions, function(optionsItem) {
                if (dataTemplate[item.inputLabel].value[optionsItem.inputOption]) {
                  optionsItem.inputModel = dataTemplate[item.inputLabel].value[optionsItem.inputOption];
                } else {
                  optionsItem.inputModel = '';
                }
              });
            } else {
              item.inputModel = dataTemplate[item.inputLabel].value;
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
    }
  };
});
