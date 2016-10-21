//loading the 'login' angularJS module
var app = angular.module('homepage', []);
//defining the login controller
app.controller('homepage', function($scope, $http) {
	//Initializing the 'invalid_login' and 'unexpected_error' 
	//to be hidden in the UI by setting them true,
	//Note: They become visible when we set them to false
	
	var carttotal = 0;
	 $http({
			method : "GET",
			url : '/getCartDetails',
			
		}).success(function(data) {
			//checking the response data for statusCode
			//alert(JSON.stringify(data.carttotal));
			 $scope.rows = data.cart;
			 carttotal = data.carttotal;
			 $scope.carttotal = 'currently total is ' + carttotal;
		}).error(function(error) {
				});
	function updateSesssionInfo(cart,carttotal)
    {
    	
    }
	$scope.addPen = function() {
		var obj = new Object();
		 obj.item = 'Pen';
		 obj.price = '$3'
	     carttotal += 3;
		 $scope.carttotal = 'currently total is ' + carttotal;
		 $scope.rows.push(obj);
		 $http({
				method : "POST",
				url : '/updatesession',
				data : {
					"cart" : $scope.rows,
					"carttotal" : carttotal
					
				}
			}).success(function(data) {
				//checking the response data for statusCode
				
				
			}).error(function(error) {
					});
	};
    $scope.addPencil = function() {
    	var obj = new Object();
		 obj.item = 'Pencil';
		 obj.price = '$5'
			 carttotal += 5
		 $scope.carttotal = 'currently total is ' + carttotal;
		 $scope.rows.push(obj);
		 //$scope.rows.push(obj);
		 $http({
				method : "POST",
				url : '/updatesession',
				data : {
					"cart" : $scope.rows,
					"carttotal" : carttotal
					
				}
			}).success(function(data) {
				//checking the response data for statusCode
				
				
			}).error(function(error) {
					});
       // $scope.count++;
    }; 
      
    $scope.addPaper = function() {
    	var obj = new Object();
		 obj.item = 'Paper';
		 obj.price = '$7'
			 carttotal += 7;
		 $scope.carttotal = 'currently total is ' + carttotal;
		 $scope.rows.push(obj);
		 //$scope.rows.push(obj);
		 $http({
				method : "POST",
				url : '/updatesession',
				data : {
					"cart" : $scope.rows,
					"carttotal" : carttotal
					
				}
			}).success(function(data) {
				//checking the response data for statusCode
				
				
			}).error(function(error) {
					});
    };
    $scope.addNote = function() {
    	var obj = new Object();
		 obj.item = 'Note';
		 obj.price = '$9'
			 carttotal += 9;
		 $scope.carttotal = 'currently total is ' + carttotal;
		 $scope.rows.push(obj);
		 //$scope.rows.push(obj);
		 $http({
				method : "POST",
				url : '/updatesession',
				data : {
					"cart" : $scope.rows,
					"carttotal" : carttotal
					
				}
			}).success(function(data) {
				//checking the response data for statusCode
				
				
			}).error(function(error) {
					});
    };
    
    
    $scope.rows = [];
   
    $scope.carttotal = 'currently total is 0';
	$scope.submit = function() {
	$scope.shoppingcart = [];	
	
	};
})
