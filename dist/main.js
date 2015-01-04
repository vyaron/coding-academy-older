(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict'

  var modules = require('./modules');

  /************************** APP internal modules **********************/



  angular.module('coding.academy', modules)


  require('./home/home.index');



})();



},{"./home/home.index":3,"./modules":4}],2:[function(require,module,exports){
// @ngInject
function HomeController( $scope ) {

  var home = this;

 




}
HomeController.$inject = ["$scope"];

module.exports = HomeController;
},{}],3:[function(require,module,exports){
(function() {
  'use strict'
  angular.module('coding.academy')

    .config(["$stateProvider", "$urlRouterProvider", function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url         : "/",
          controller  : 'HomeController',
          controllerAs: 'home',
          templateUrl : "app/home/home.html"
        })
        .state('you', {
          url        : "/you",
          templateUrl: "app/you/you.html"
        })
        .state('us', {
          url        : "/us",
          templateUrl: "app/us/us.html"
        })
        .state('training', {
          url        : "/training",
          templateUrl: "app/training/training.html"
        })
        .state('training.one', {
          url        : "/one",
          templateUrl: "app/training/one.html"
        })
        .state('training.two', {
          url        : "/two",
          templateUrl: "app/training/two.html"
        })
        .state('training.three', {
          url        : "/three",
          templateUrl: "app/training/three.html"
        })
        .state('training.four', {
          url        : "/four",
          templateUrl: "app/training/four.html"
        })
        .state('training.five', {
          url        : "/five",
          templateUrl: "app/training/five.html"
        })

        .state('contact', {
          url        : "/contact",
          templateUrl: "app/contact/contact.html"
        })
    }])

    .controller('HomeController', require('./home.controller'))

    .run(runConfig)
// @ngInject
  function runConfig( $rootScope ) {
    $rootScope.$on('$stateChangeSuccess', function() {
      $("html, body").animate({scrollTop: 0}, 200);
    })

  }
  runConfig.$inject = ["$rootScope"];

})();

},{"./home.controller":2}],4:[function(require,module,exports){
(function() {
  'use strict'

  var modules = [

    /** Third party modules **/
    'ui.router',
    'ngAnimate'
  ];

  module.exports = modules;

})();
},{}]},{},[1])