var app = angular.module("myApp",[]);

app.controller("NameDisplayController",function($scope){
  $scope.today = new Date()
  $scope.$watch('textBox',function(newVal,oldVal,scope){
    if (newVal!==oldVal) {
      $scope.name = newVal
    }
  })
});

app.controller("DollarFilterController",['$scope','$filter',function($scope,$filter){
  $scope.$watch('textBox',function(newVal,oldVal,scope){
    if (newVal!==oldVal) {
      $scope.name = $filter('lowercase')(newVal)
    }
  })
}]);

app.controller("FilterFilterController",function($scope){
  //Capitalization of substring doesn't matter in either this nor object
  //See html for how to specify case sensitivity
  $scope.namesList = ["Ari","Lerner","Likes","To","Eat","Pizza"];
  $scope.letterToSelectFor = "e";''

  $scope.peopleObjects = [{"name":"Ari",
                           "City":"San Francisco",
                           "favorite food":"Pizza"
                         },
                         {"name":"Nate",
                          "City":"San Francisco",
                          "favorite food":"indian food"
                        },
                        {"name":"Sweeny",
                         "City":"Colorado",
                         "favorite food":"pizza"
                       }];
  $scope.propertyToSelectFor = {"favorite food":"Pizza"};
  $scope.stringify = {"name":"Ari",
                           "City":"San Francisco",
                           "favorite food":"Pizza"
                         };
  $scope.wordsList = ["Ari","likes","to","travel","to","Cuba"];
  $scope.isCapitalized = function(word) {return word[0]===word[0].toUpperCase();};
});

//Filter's first argument is the name of the filter then it takes in a function that returns a function used to filter the input
app.filter('capitalize',function() {
  // This filter capitalizes the first letter of the input
  return function(input) {
    //input is a string
    return input[0].toUpperCase() + input.slice(1);
  }
});
