var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.checkbox1 = false;
    $scope.checkbox2 = false;

    $scope.toggleCheckbox = function () {
        $scope.checkbox2 = $scope.checkbox1;
    };
});