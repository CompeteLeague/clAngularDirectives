var module = angular.module('example', ['cl.feedback']);

module.controller('ExampleCtrl', ['$scope',
  function($scope) {

    $scope.addPositive = function() {
      $scope.youchraFeedback.add({
        msg: 'Super Cool Feedback Message! Everything Worked!',
        class: 'alert-success'
      });
    };

    $scope.addNegative = function() {
      $scope.youchraFeedback.add({
        msg: 'So bad. Bennis API always responds with 401 404 500 and shit!',
        class: 'alert-danger'
      });
    };

    $scope.youchraFeedback = {
      time: 2000,
      btnClass: 'btn-cl'
    };

  }
]);
