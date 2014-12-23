'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'MyCtrl1'});
  $routeProvider.when('/you', {templateUrl: 'partials/you.html', controller: 'MyCtrl1'});
  $routeProvider.when('/us', {templateUrl: 'partials/us.html', controller: 'MyCtrl1'});
  $routeProvider.when('/method', {templateUrl: 'partials/method.html', controller: 'MyCtrl1'});
  $routeProvider.when('/tech', {templateUrl: 'partials/tech.html', controller: 'MyCtrl1'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
