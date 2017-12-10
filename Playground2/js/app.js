var app = angular.module("myApp",[]);
app.run(function($rootScope){
  //Use .run to access $rootScope
  $rootScope.printRootScope = function(){
    console.log($rootScope)

  }
  $rootScope.scrollToBottom = function(){
    console.log("window:",window)
    window.scrollTo(0,100000)
  }
  $rootScope.scrollToTop = function(){
    window.scrollTo(0,0)
  }
});
