var app = angular.module("myApp",[]);
app.run(function($rootScope,$timeout){
  //Use .run to access $rootScope
  $rootScope.printRootScope = function(){
    console.log($rootScope)
  }

  $rootScope.isDisabled = true;

  $timeout(function() {
    $rootScope.isDisabled = false;
    console.log("triggered isDisabled");
  },5000)
  $timeout(function() {
    $rootScope.myHref = "http://google.com";
    console.log("triggered myHref");
  },2000)
  $timeout(function() {
    $rootScope.imgSrc = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    console.log("triggered imgSrc");
  },2000)
  // setInterval(function(){
  //   console.log("Hello World!")
  // },10000)

});
