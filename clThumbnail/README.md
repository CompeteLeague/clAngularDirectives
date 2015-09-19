## CL Thumbnail

### Description

This directive was written for the CompeteLeague website. It provides a CompeteLeague
customized Bootstrap Thumbnail Layout.

### Install

Use `bower install cl-angular-directives` to install the package.

### Usage

Make sure you have all the files and modules imported correctly:

Index.html:

    <script src="bower_components/cl-angular-directives/clThumbnail/dist/clThumbnail.js"></script>

And the Module:

    angular.module('YourModule', ['cl.thumbnail'])

The HTML Tag:

    <cl-thumbnail options="optionsObject"></cl-thumbnail>

And in your Controller define the options object as this:

    $scope.optionsObject = {
      firstName: 'firstName',
      lastName: 'lastName',
      nickName: 'nickName',
      infoText: 'infoText',
      imageUrl: 'imageUrl.jpg',
      email: 'email@email.com'
    };


### License

The MIT License - Raphael 'Youchra' Hippe

See the [LICENSE](https://github.com/CompeteLeague/clAngularDirectives/blob/master/LICENSE.md) file fore more information!

### Contribution

Feel free to issue a pull request. We are happy about every single contribution!

### Dependencies / 3rd Party Library

Twitter Bootstrap CSS (MIT)

AngularJS (MIT)
