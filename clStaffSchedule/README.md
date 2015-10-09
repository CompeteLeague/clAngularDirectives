## CL Staff Schedule

### Description

This directive was written for the CompeteLeague website. It provides a CompeteLeague
customized Schedule Layout.

### Install

Use `bower install cl-angular-directives` to install the package.

### Usage

Make sure you have all the files and modules imported correctly:

Index.html:

    <script src="bower_components/cl-angular-directives/clStaffSchedule/dist/clStaffSchedule.js"></script>

And the Module:

    angular.module('YourModule', ['cl.staffSchedule'])

The HTML Tag:

    <cl-staff-schedule options="staffScheduleOptions"></cl-staff-schedule>

And in your Controller define the options object as this:

    $scope.staffScheduleOptions = {
      weekdays: [{
        name: 'Mon',
        timeSlots: [{
          name: '05',
          class: '',
          users: []
       },
        {
          name: '06',
          class: 'entry',
          users: ['Youchra', 'Mindmesser']
        },
        {
          name: '07',
          class: 'entry',
          users: ['Youchra']
        },
         {
          name: '08',
          class: 'entry',
          users: ['Papschachtel']
        },
        {
          name: '09',
          class: 'entry',
          users: ['OberstK']
        },
        {
          name: '10',
          class: 'entry',
          users: ['Mindmesser']
        },
       ....
        {
         name: '04',
         class: '',
         users: []
       }]
     },
      ...
     ]};



### License

The MIT License - Raphael 'Youchra' Hippe

See the [LICENSE](https://github.com/CompeteLeague/clAngularDirectives/blob/master/LICENSE.md) file fore more information!

### Contribution

Feel free to issue a pull request. We are happy about every single contribution!

### Dependencies / 3rd Party Library

Twitter Bootstrap CSS (MIT)

AngularJS (MIT)
