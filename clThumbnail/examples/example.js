var module = angular.module('example', ['cl.thumbnail']);

module.controller('ExampleCtrl', ['$scope', function ($scope) {

  $scope.youchraThumbnail = {
    firstName: 'Raphael',
    lastName: 'Hippe',
    nickName: 'Youchra',
    infoText: 'EUW Deputy Manager, Contact for help with: Bug reports/website feedback, LoL feedback/issues, Any miscellaneous reason.',
    imageUrl: 'RaphiSponsorshipPhoto.jpg',
    email: 'youchra@competeleague.com'
  };

}]);
