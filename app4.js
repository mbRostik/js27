var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
    $scope.isChecked = false;

    $scope.toggleCheckbox = function () {
        $scope.isChecked = !$scope.isChecked;
    };
});

