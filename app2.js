var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.countries = ['Україна', 'Польща', 'Великобританія'];
    $scope.addCountry = function () {
        if ($scope.newCountry) {
            $scope.countries.push($scope.newCountry);
            $scope.newCountry = '';
        }
    };
});