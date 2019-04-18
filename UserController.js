let app = angular.module("myApp", []);
app.controller('ctrol', ['$scope','UserCRUDService',
    function ($scope,UserCRUDService) {
        $scope.firstName = "John";
        $scope.getUser = function () {
            var id = $scope.user.id;
            UserCRUDService.getUser($scope.user.id)
                .then(function success(response) {
                        $scope.user = response.data;
                        $scope.user.id = id;
                        $scope.message='';
                        $scope.errorMessage = '';
                    },
                    function error (response) {
                        $scope.message = '';
                        if (response.status === 404){
                            $scope.errorMessage = 'User not found!';
                        }
                        else {
                            $scope.errorMessage = "Error getting user!";
                        }
                    });
        };
        $scope.addUser = function () {
            if ($scope.user != null && $scope.user.name) {
                UserCRUDService.addUser($scope.user.name, $scope.user.email)
                    .then (function success(response){
                            $scope.message = 'User added!';
                            $scope.errorMessage = '';
                        },
                        function error(response){
                            $scope.errorMessage = 'Error adding user!';
                            $scope.message = '';
                        });
            }
            else {
                $scope.errorMessage = 'Please enter a name!';
                $scope.message = '';
            }
        };
        $scope.updateUser = function () {
            UserCRUDService.updateUser($scope.user.id,
                $scope.user.name, $scope.user.email)
                .then(function success(response) {
                        $scope.message = 'User data updated!';
                        $scope.errorMessage = '';
                    },
                    function error(response) {
                        $scope.errorMessage = 'Error updating user!';
                        $scope.message = '';
                    });
        }

        $scope.deleteUser = function () {
            UserCRUDService.deleteUser($scope.user.id)
                .then (function success(response) {
                        $scope.message = 'User deleted!';
                        $scope.User = null;
                        $scope.errorMessage='';
                    },
                    function error(response) {
                        $scope.errorMessage = 'Error deleting user!';
                        $scope.message='';
                    });
        }
        $scope.getAllUsers = function () {
            UserCRUDService.getAllUsers()
                .then(function success(response) {
                        $scope.users = response.data._embedded.users;
                        $scope.message='';
                        $scope.errorMessage = '';
                    },
                    function error (response) {
                        $scope.message='';
                        $scope.errorMessage = 'Error getting users!';
                    });
        }
    }]);
