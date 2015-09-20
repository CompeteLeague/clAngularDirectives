var module = angular.module('example', ['cl.creation']);

module.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.creationOptions = {
    title: 'Tournament Creation',
    /*here you can put in your input Fields:
    inputTypes: radio, text, number, textarea, select, checkbox
    */
    inputs: [{
      inputType: 'text',
      inputLabel: 'Name',
      inputKey: 'name',
      inputIsActive: true,
      inputIsRequired: true,
      inputPlaceholder: 'Tournament Name',
      inputClass: 'inputClass',
      inputModel: ''
    }, {
      inputType: 'radio',
      inputLabel: 'Tournament Type',
      inputKey: 'type',
      inputIsRequired: true,
      inputIsActive: true,
      inputClass: 'inputClass',
      inputOptions: ['Season', 'Qualifier', 'Promotion', 'Playoffs'],
      inputModel: ''
    }, {
      inputType: 'radio',
      inputLabel: 'Region',
      inputKey: 'region',
      inputIsRequired: true,
      inputIsActive: true,
      inputClass: 'inputClass',
      inputOptions: ['EU', 'NA'],
      inputModel: ''
    }, {
      inputType: 'radio',
      inputLabel: 'Open',
      inputKey: 'open',
      inputIsRequired: true,
      inputIsActive: true,
      inputClass: 'inputClass',
      inputOptions: ['True', 'False'],
      inputModel: ''
    }],
    buttonLabel: 'Create Tournament',
    create: function(creationObject) {
      console.log(creationObject);
    },
    dataTemplates: {
      naGoldPlatPlayoffs: {
        type: {
          value: 'Playoffs'
        },
        region: {
          value: 'NA'
        },
        open: {
          value: 'False'
        },
        name: {
          value: 'NA Gold and Platinum Playoffs'
        }
      },
      euBronzeSilverSeasonOpen: {
        type: {
          value: 'Season'
        },
        region: {
          value: 'EU',
        },
        open: {
          value: 'True',
        },
        name: {
          value: 'EU Bronze and Silver Open Season'
        }
      },
    }
  };
}]);
