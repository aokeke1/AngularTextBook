var app = angular.module("myApp",[]);

app.directive('myFirstDirective',function() {
  return {
    restrict: 'EAC',
    template: '<a href="http://google.com">First Directive: Click me to go to Google</a><br/>'
  }
});

app.directive('mySecondDirective',function() {
  return {
    restrict: 'EM',
    replace: true, //This removes the directive from the DOM. If replace is true, template can only be one element. Everything needs to be inside the one element
    template: '<div><a href="http://google.com">Second Directive: Click me to go to Google</a><br/><div>'
  }
});

//See page 68
app.directive('myElementDirective',function() {
  return {
    //Element
    restrict: 'E',
    template: '<p>Element Directive</p><br/>'
  }
});
app.directive('myAttributeDirective',function() {
  return {
    //Attribute
    restrict: 'A',
    template: '<p>Attribute Directive</p><br/>'
  }
});
app.directive('myClassDirective',function() {
  return {
    //Class
    restrict: 'C',
    template: '<p>Class Directive</p><br/>'
  }
});
app.directive('myCommentDirective',function() {
  return {
    //Comment
    restrict: 'M',
    //Comment directives require that replace is true
    replace: true,
    template: '<div><p>Comment Directive</p><br/></div>'
  }
});

//See page 72-73 attribute directives that make use of other attributes
app.directive('myDirectiveWithAttributes',function() {
  return {
    //Attribute
    restrict: 'A',
    scope: {
      //Use @ for binding attributes from the directive
      //Binding the my-url and my-link-text attributes so they can be used in the directive
      myUrl: '@',
      myLinkText: '@',
      //Can specify the specific name
      myRenamedVar:'@myUrl'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a><br/>',
    controller: function($scope) {
      //can use values defined in scopes
      console.log("myUrl",$scope.myUrl)
      console.log("myLinkText",$scope.myLinkText)
      console.log("myRenamedVar",$scope.myRenamedVar)
    }
  }
});

//Pg 77 using values from outer scope in directive
app.controller('myWrappingController',function($scope){
  $scope.inputText = ''
})
app.directive('directiveUsingScope',function() {
  return {
    restrict: 'A',
    scope: {
      someAttr: '@'
    },
    template: '<p>{{someAttr||"Hello World"}}</p>'
  }
})

//Pg 79 complicated bindings
app.directive('complicatedBindingDirective',function() {
  return {
    restrict: 'A',
    scope: {
      //binding myUrl is not necessary in this case because the template deals with isolate scope from ng-model only
      myUrl: '=someAttr', //This sends the value of myUrl back out to the parent scope that some-attr is set to
      myLinkText: '@',
      //This does not work because it looks at the current value as if it were a string and not a variable because it is not defined in the scope
      myExtraVar: '@someAttr',
      mySecondExtraVar: '@someSecondAttr'
    },
    template: '\
    <div>\
      <label>My Url Field:</label>\
      <input type="text"\
             ng-model="myUrl" />\
      <a href="{{myUrl}}">{{myLinkText}}</a>\
      <br>\
      <p>inside myExtraVar: {{myExtraVar}}</p>\
      <p>inside mySecondExtraVar: {{mySecondExtraVar}}</p>\
    </div>'
  }
})
app.run(function($rootScope){
  //Use .run to access $rootScope
  $rootScope.printRootScope = function(){
    console.log($rootScope)
  }
});
