var clStaffSchedule=angular.module("cl.staffSchedule",[]);clStaffSchedule.directive("clStaffSchedule",function(){return{templateUrl:"bower_components/cl-angular-directives/clStaffSchedule/dist/clStaffSchedule.html",restrict:"E",scope:{options:"=options"},link:function(e,t,c){e.isArray=function(e){return angular.isArray(e)}}}});