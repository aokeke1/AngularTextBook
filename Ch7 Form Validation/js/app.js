var app = angular.module("myApp",[]);

app.controller("FirstController",function($scope){
  $scope.user = {}
  $scope.submitClicked = function(){
    console.log("$scope",$scope)
    console.log("user",$scope.user)
  }

})
