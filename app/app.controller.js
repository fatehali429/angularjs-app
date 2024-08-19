// app.controller.js
angular.module('myApp').controller('MainController', function($scope) {
    $scope.tasks = [];
    $scope.newTask = '';

    $scope.addTask = function() {
        if ($scope.newTask.trim() !== '') {
            $scope.tasks.push({ name: $scope.newTask, completed: false });
            $scope.newTask = ''; // Clear the input field
        }
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
    };
});
