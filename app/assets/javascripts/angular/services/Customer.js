var app = angular.module('app');

app.service('Customer',['$http', function($http){
	var base_url = '/customers'

	this.index = function() {
	return $http.get(Routes.customers_path({format: 'json'}));
	};
	this.create = function(customer){
		return $http.post(Routes.customers_path({customer: customer, format: 'json'}));
	};

	this.show = function(id){
	  return $http.get(Routes.customer_path(id, {format: 'json'}));
	};

	this.update = function(customer){
		return $http.put(Routes.customer_path(customer.id,{customer: customer,format: 'json'}))
	};
	this.destroy = function(customerId){
		return $http.delete(Routes.customer_path(customerId,{format: 'json'}))
	};
}]);

