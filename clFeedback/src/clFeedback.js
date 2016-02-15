var clFeedback = angular.module('cl.feedback', []);

clFeedback.directive('clFeedback', ['FeedbackStorageService', '$timeout',
  function(FeedbackStorageService, $timeout) {
    return {
      templateUrl: 'clFeedback.html',
      restrict: 'E',
      scope: {
        options: '='
      },
      link: function(scope, element, attrs) {
        scope.feedback = scope.options || {};

        if (!scope.feedback.time) {
          scope.feedback.time = 5000;
        }
        if (!scope.feedback.btnClass) {
          scope.feedback.btnClass = 'cl-feedback-btn-default';
        }

        scope.feedback.add = function(msg) {
          scope.newMsg = msg;
          scope.showMsg = true;
          FeedbackStorageService.store(msg);
          $timeout(function() {
            scope.showMsg = false;
          }, scope.feedback.time);
        };

        scope.msglist = [];

        scope.showPastMsgs = function() {
          scope.msglist = FeedbackStorageService.getList();
          scope.msglist.reverse();
          scope.showList = true;
        };

        scope.hideList = function() {
          scope.showList = false;
        };

      }
    };
  }
]);

clFeedback.factory('FeedbackStorageService', function() {
  var fs = {};
  fs.msglist = [];

  fs.store = function(msg) {
    fs.msglist.push(msg);
  };

  fs.getList = function() {
    return fs.msglist;
  };

  return {
    store: function(msg) {
      return fs.store(msg);
    },
    getList: function() {
      return fs.getList();
    }
  };
});
