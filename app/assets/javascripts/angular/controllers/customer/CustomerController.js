var app = angular.module('app');


app.controller('CustomerController', ['$scope', '$modal','Customer','$stateParams', function($scope, $modal,Customer,$stateParams) {
  $scope.customers = [];
  $scope.new_customer = {};
  $scope.customer = {};
  $scope.id = null;
  $scope.query = null;

  // $scope.allCustomer = function fetchCustomers() {
  //   return Customer.index().then(function(response) {
  //     $scope.customers = response.data;
  //   });
  // };

    function fetchCustomer() { 
    return Customer.show($stateParams.id).then(function(response) {
      $scope.customer = response.data;
    })
  };

  $scope.addRepair = function(){
    createModal.$promise.then(function(){
    createModal.show();
    });

  };

 //  $scope.addCustomer = function(){
 //  	createModal.$promise.then(createModal.show);

 //  };

 // $scope.createCustomer = function() {
 //    Customer.create($scope.new_customer).then(function(response) {
 //      $scope.customers.push(response.data.customer);
 //      $scope.new_customer = {};
 //      createModal.hide();
 //  	$scope.allCustomer();

 //    }, function(response) {
 //      alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
 //    });
 //  };

  var createModal = $modal({
  	scope: $scope,
  	templateUrl: 'angular/templates/repairs/addRepairModal.html',
  	show: false
  });
  fetchCustomer();
}]);
