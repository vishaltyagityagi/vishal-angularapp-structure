var app = angular.module('app');


app.controller('CustomersController', ['$scope', '$modal','Customer', function($scope, $modal,Customer) {
  $scope.customers = [];
  $scope.new_customer = {};
  $scope.customer = {};
  $scope.customerId = null;
  $scope.query = null;

  $scope.allCustomer = function fetchCustomers() {
    return Customer.index().then(function(response) {
      $scope.customers = response.data;
    });
  };

  $scope.addCustomer = function(){
  	createModal.$promise.then(createModal.show);

  };

 $scope.createCustomer = function() {
    Customer.create($scope.new_customer).then(function(response) {
      $scope.customers.push(response.data.customer);
      $scope.new_customer = {};
      createModal.hide();
  	$scope.allCustomer();

    }, function(response) {
      alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
    });
  };

 $scope.editCustomer = function(customer, index){
 	editModal.$promise.then(editModal.show);
 	$scope.customer = angular.copy(customer);
 	$scope.customerId = index;
 };

 $scope.updateCustomer = function(){
 	Customer.update($scope.customer).then(function(response){
	$scope.customer[$scope.customerId] = response.data;
	editModal.hide();
 	});
  $scope.allCustomer();

 };

 $scope.destroyCustomer = function(customerId, index) {
    Customer.destroy(customerId).then(function(response) {
      $scope.customers.splice(index, 1);
    });
  };

  var createModal = $modal({
  	scope: $scope,
  	templateUrl: 'angular/templates/customers/addCustomerModal.html',
  	show: false
  });

  var editModal = $modal({
  	scope: $scope,
  	templateUrl: 'angular/templates/customers/editCustomerModal.html',
  	show: false
  });

  $scope.allCustomer();
}]);
