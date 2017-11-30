var app = angular.module("myApp",[]);
app.run(function($rootScope){
  //Use .run to access $rootScope
  $rootScope.printRootScope = function(){
    console.log($rootScope)
  }
});
