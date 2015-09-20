## CL Creation

### Description

This directive was written for the CompeteLeague website. It provides a CompeteLeague
customized Bootstrap Table Layout with some extra features.

### Install

Use `bower install cl-angular-directives` to install the package.

### Usage

Make sure you have all the files and modules imported correctly:

Index.html:

    <script src="bower_components/cl-angular-directives/clCreation/dist/clCreation.js"></script>

And the Module:

    angular.module('YourModule', ['cl.creation'])

The HTML Tag:

    <cl-creation options="creationOptions"></cl-creation>

And in your Controller define the options object as this:

    $scope.creationOptions = {
      title: 'Tournament Creation',
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


### License

The MIT License - Raphael 'Youchra' Hippe

See the [LICENSE](https://github.com/CompeteLeague/clAngularDirectives/blob/master/LICENSE.md) file fore more information!

### Contribution

Feel free to issue a pull request. We are happy about every single contribution!

### Dependencies / 3rd Party Library

Twitter Bootstrap CSS (MIT)

AngularJS (MIT)
