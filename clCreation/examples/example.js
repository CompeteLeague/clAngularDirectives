var module = angular.module('example', ['cl.creation']);

module.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.creationOptions = {
    title: 'Tournament Creation',
    /*here you can put in your input Fields:
    inputTypes: radio, text, number, textarea, select, checkbox
    */
    inputs: [{
      /*needed*/
      inputType: 'radio',
      inputLabel: 'Name',
      /*default = true */
      inputIsActive: true,
      /* optional*/
      inputClass: 'inputClass',
      /*options*/
      inputOptions: ['option1', 'option2', 'option3'],
      inputModel: 'option3'
    }, {
      /*needed*/
      inputType: 'text',
      inputLabel: 'Name1',
      /*default = true */
      inputIsRequired: true,
      inputIsActive: true,
      /* optional*/
      inputPlaceholder: 'placeholder',
      inputClass: 'inputClass',
      inputModel: 'Hello World'
    }, {
      /*needed*/
      inputType: 'textarea',
      inputLabel: 'Name2',
      /*default = true */
      inputIsRequired: false,
      inputIsActive: true,
      /* optional*/
      inputPlaceholder: 'placeholder',
      inputClass: 'inputClass',
      inputModel: 'aweioawjoe'
    }, {
      /*needed*/
      inputType: 'number',
      inputLabel: 'Name3',
      /*default = true */
      inputIsRequired: true,
      inputIsActive: true,
      /* optional*/
      inputPlaceholder: 'placeholder',
      inputClass: 'inputClass',
      inputModel: 5
    }, {
      /*needed sisisi*/
      inputType: 'select',
      inputLabel: 'Name4',
      /*default = true */
      inputIsRequired: true,
      inputIsActive: true,
      /* optional*/
      inputPlaceholder: 'placeholder',
      inputClass: 'inputClass',
      inputOptions: ['option1', 'option2', 'option3'],
      inputModel: 'option1'
    }, {
      /*needed*/
      inputType: 'checkbox',
      inputLabel: 'Name5',
      /*default = true */
      inputIsRequired: false,
      inputIsActive: true,
      /* optional*/
      inputPlaceholder: 'placeholder',
      inputClass: 'inputClass',
      inputOptions: [{
        inputOption: 'option1',
        inputModel: true
      }, {
        inputOption: 'option2',
        inputModel: ''
      }, {
        inputOption: 'option3',
        inputModel: true
      }]
    }],
    buttonLabel: 'create Tournament',
    create: function(options) {
      console.log(options);
    },
    dataTemplates: {
      a: {
        Name5: {
          value: {
            option2: true,
            option1: true
          },
        },
        Name1: {
          value: 'Hello Liam'
        }
      },
      b: {
        Name5: {
          value: {
            option2: true,
            option1: true
          },
        },
        Name1: {
          value: 'Hello CompeteLeague'
        }
      }
    }
  };
}]);
