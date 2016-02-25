## CL Table

### Description

This directive was written for the CompeteLeague website. It provides a CompeteLeague
customized Bootstrap Table Layout with some extra features.

### Install

Use `bower install cl-angular-directives` to install the package.

### Usage

Make sure you have all the files and modules imported correctly:

Index.html:

    <script src="bower_components/cl-angular-directives/clTable/dist/clTable.js"></script>

And the Module:

    angular.module('YourModule', ['cl.table'])

The HTML Tag:

    <cl-table options="tableOptions"></cl-table>

And in your Controller define the options object as this:

    $scope.tableOptions = {
      content: [{
        name: 'Bronze/Silver Season 1',
        region: 'NA',
        tournamenttype: 'Season Open',
        date: '12.09.2015',
        action: {
          display: 'Print It',
          fn: function () {
            console.log('Hello world!');
          },
          class: 'btn-primary'
        }
      }, {
        name: 'Gold/Platinum Season 1',
        region: 'NA',
        tournamenttype: 'Season Open',
        date: '12.09.2015',
        action: {
          display: 'Print It',
          fn: function () {
            console.log('Hello world!');
          },
          class: 'btn-danger'
        }
      }, {
        name: 'Diamon/Above Season 1',
        region: 'NA',
        tournamenttype: 'Season Open',
        date: '12.09.2015',
        action: {
          display: 'Print It',
          fn: function () {
            console.log('Hello world!');
          },
          class: 'btn-warning'
        }
      }],
      heading: ['Name', 'Region', 'Type', 'Date', 'Action'],
      contentAttributes: ['name', 'region', 'tournamenttype', 'date', 'action'],
      searchable: true
    };


### License

The MIT License - Raphael 'Youchra' Hippe

See the [LICENSE](https://github.com/CompeteLeague/clAngularDirectives/blob/master/LICENSE.md) file fore more information!

### Contribution

Feel free to issue a pull request. We are happy about every single contribution!

### Dependencies / 3rd Party Library

Twitter Bootstrap CSS (MIT)

AngularJS (MIT)
