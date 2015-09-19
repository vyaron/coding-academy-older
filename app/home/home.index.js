(function() {
  'use strict'
  angular.module('coding.academy')

    .config(function( $stateProvider, $urlRouterProvider ) {

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
    })

    .controller('HomeController', require('./home.controller'))

//    .run(runConfig)
//// @ngInject
//  function runConfig( $rootScope ) {
//    $rootScope.$on('$stateChangeSuccess', function() {
//      $("html, body").animate({scrollTop: 0}, 200);
//    })
//
//  }

})();
