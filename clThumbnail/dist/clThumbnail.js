var clThumbnail=angular.module("cl.thumbnail",[]);clThumbnail.directive("clThumbnail",function(){return{restrict:"E",scope:{options:"=options"},templateUrl:"bower_components/clAngularDirectives/clThumbnail/dist/clThumbnail.html",link:function(l,n,i){console.log("options",l.options)}}});