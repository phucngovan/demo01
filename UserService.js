let app = angular.module("myApp", []);
app.service('UserCRUDService', [ '$http', function($http) {

    this.getUser = function getUser(userId) {
        return $http({
            method : 'GET',
            url : 'http://localhost:8080/api/user/' + userId
        });
    }
    this.addUser = function addUser(name, age ,salary) {
        return $http({
            method : 'POST',
            url : 'http://localhost:8080/api/user/',
            data : {
                name : name,
                age: age,
                salary: salary
            }
        });
    }
    this.updateUser = function updateUser(id, name, age, salary) {
        return $http({
            method : 'PATCH',
            url : 'http://localhost:8080/api/user//' + id,
            data : {
                name : name,
                age : age,
                salary: salary
            }
        });
    }
    this.deleteUser = function deleteUser(id) {
        return $http({
            method : 'DELETE',
            url : 'http://localhost:8080/api/user/' + id
        })
    }
    this.getAllUsers = function getAllUsers() {
        return $http({
            method : 'GET',
            url : 'http://localhost:8080/api/user/'
        });
    }
} ]);

