var clFeedback=angular.module("cl.feedback",[]);clFeedback.directive("clFeedback",["FeedbackStorageService","$timeout",function(e,t){return{templateUrl:"clFeedback.html",restrict:"E",scope:{options:"="},link:function(s,c,i){s.feedback=s.options||{},s.feedback.time||(s.feedback.time=5e3),s.feedback.btnClass||(s.feedback.btnClass="cl-feedback-btn-default"),s.feedback.add=function(c){s.newMsg=c,s.showMsg=!0,e.store(c),t(function(){s.showMsg=!1},s.feedback.time)},s.msglist=[],s.showPastMsgs=function(){s.msglist=e.getList(),s.msglist.reverse(),s.showList=!0},s.hideList=function(){s.showList=!1}}}}]),clFeedback.factory("FeedbackStorageService",function(){var e={};return e.msglist=[],e.store=function(t){e.msglist.push(t)},e.getList=function(){return e.msglist},{store:function(t){return e.store(t)},getList:function(){return e.getList()}}});