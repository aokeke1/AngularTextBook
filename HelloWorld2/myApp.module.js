var myApp = angular.module('myApp',[]).controller('MyFirstController',
function($scope){
  console.log("$scope:",$scope)
  $scope.name = "Ari";
}).controller('MySecondController',
function($scope){
  console.log("$scope:",$scope)
  $scope.age = "312401240";
}).controller('MyThirdController',
function($scope){
  console.log("$scope:",$scope)
  $scope.pickle = "PickleRick";
}).run(function($rootScope){
  console.log("$rootScope:",$rootScope)
});
