// Set up emailParser module
angular.module('emailParser',[])
  .config(['$interpolateProvider',function($interpolateProvider) {
    // $interpolateProvider.startSymbol('__');
    // $interpolateProvider.endSymbol('__');
  }])
  .factory('EmailParser',['$interpolate', function($interpolate) {
    // a service to handle parsing
    return {
      parse: function(text,context) {
        var template = $interpolate(text);
        return template(context);
      }
    }
  }]);


var app = angular.module("myApp",['emailParser']);

app.run(function($rootScope){
  //Use .run to access $rootScope
  console.log("$rootScope:",$rootScope)
});

app.controller("FirstController",function($scope){
  // console.log("$scope:",$scope)
  $scope.counter = 0
  $scope.add = function(amount) {
    $scope.counter += amount;
  }
  $scope.subtract = function(amount) {
    $scope.counter -= amount;
  }
});

app.controller("ParentController",function($scope){
  $scope.person = {greeted:false};
});

app.controller("ChildController",function($scope){
  $scope.person = $scope.person||{};
  $scope.sayHello = function(){
    $scope.person.name = "Arinze Okeke";
    $scope.person.greeted = true;
  }
});

app.controller("ParseController",function($scope,$parse){
  $scope.$watch('expr',function(newVal,oldVal,scope){
    if (newVal !== oldVal) {
      // Let's set up our parseFun with the expression
      var parseFun = $parse(newVal);
      // Get the value of the parsed expression
      $scope.parsedValue = parseFun(scope);
      console.log("parseFun:",parseFun)
    }
  });
});


app.controller("InterpolateController",function($scope,$interpolate){
  // Set up the watch
  $scope.$watch('emailBody',function(body){
    if (body) {
      var template = $interpolate(body);
      $scope.previewText = template({to:$scope.to});
      console.log("Interpolate scope:",$scope);
    }
  });
});



app.controller("SecondInterpolateController",['$scope','EmailParser',function($scope,EmailParser){
  $scope.$watch('emailBody',function(body){
    if (body) {
      $scope.previewText = EmailParser.parse(body,{to:$scope.to});
    }
  });
}]);
