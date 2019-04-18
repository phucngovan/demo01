var app = angular.module("myApp", []);
app.controller('ctrol', function($scope, $http) {
    $scope.firstName = "John";
    $scope.getAll = function () {
        $http({
            method: 'GET',
            url: '/loc',
            data : {
            }
        }).then(function successCallback(response) {
            debugger;
        }, function errorCallback(response) {

        });
    }
});
