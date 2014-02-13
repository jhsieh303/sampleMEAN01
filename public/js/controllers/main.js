
angular.module('todoController', [])
    // inject the todo service factory into our controller
    .controller('mainController', function($scope, $http, Todos) {
		$scope.formData = {};

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if (!$.isEmptyObject($scope.formData)) {

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.todos = data; // assign our new list of todos
				});
		};
	});



/*
 var myApp = angular.module('myApp', []);

 /*

 //injection into 'myApp.controllers'
 var myApp = angular.module('myApp', ['ngRoute', 'myApp.controllers']);

 myApp.config(function ($routeProvider) {
 $routeProvider.when('/' ,{templateUrl:"./partials/table.html"}, "tableCtrl").
 when('/add', {templateUrl:"./partials/add.html"}, "addCtrl").
 when('/edit', {templateUrl:"./partials/edit.html"}, "editCtrl")
 });
 */

/*
function mainController($scope, $http) {

    $scope.formData = {userName: ''};

    $http.get('/api/users').success(function(data) {
        $scope.users = data;
    });

    $scope.createUser = function() {
        $http.post('/api/users', $scope.formData)

        $http.get('/api/users').success(function(data) {
            $scope.users = data;
        });
    };

    $scope.updateUser = function(id) {
        $scope.newName = prompt("Please enter your new User Name: ", "");
        $http.put('/api/users/' + id, {userName: $scope.newName}).success(function(data) {
            $scope.users = data;
        });

        $http.get('/api/users').success(function(data) {
            $scope.users = data;
        });

    };

    $scope.deleteUser = function(id) {
        $http.delete('/api/users/' + id).success(function() {
            $http.get('/api/users').success(function(data) {
                $scope.users = data;
            });
        });

        $http.get('/api/users').success(function(data) {
            $scope.users = data;
        });
    };
}
 */