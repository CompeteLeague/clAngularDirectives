## CL Feedback

### Description

This directive was written for the CompeteLeague website. It provides a generic way to issue User Feedback.

### Install

Use `bower install cl-angular-directives` to install the package.

### Usage

Make sure you have all the files and modules imported correctly:

Index.html:

    <script src="bower_components/cl-angular-directives/clFeedback/dist/clFeedback.js"></script>

And the Module:

    angular.module('YourModule', ['cl.feedback'])

The HTML Tag:

    <cl-feedback options="clFeedback"></cl-feedback>

And in your Controller define the options object as this:

    $scope.clFeedback = {
      time: 2000,
      btnClass: 'btn-cl'
    };

    $scope.clFeedback.add({
      msg: 'Enter here your User Feedback Message',
      class: 'alert-success'
    });

    $scope.clFeedback.add({
      msg: 'Enter here your User Feedback Message',
      class: 'alert-danger'
    });


### License

The MIT License - Raphael 'Youchra' Hippe

See the [LICENSE](https://github.com/CompeteLeague/clAngularDirectives/blob/master/LICENSE.md) file fore more information!

### Contribution

Feel free to issue a pull request. We are happy about every single contribution!

### Dependencies / 3rd Party Library

Twitter Bootstrap CSS (MIT)

AngularJS (MIT)
