var app = angular.module('app', ['templates', 'ui.router', 'mgcrea.ngStrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'angular/templates/main/index.html',
      controller: 'MainController'
    })
    .state('/customers', {
      url: '/customers',
      templateUrl: 'angular/templates/customers/customer.html',
      controller: 'CustomersController',
    })
    .state('/customer', {
      url: '/customer/:id',
      templateUrl: 'angular/templates/customers/show.html',
      controller: 'CustomerController',
    });
  $urlRouterProvider.otherwise('/');
}]);
