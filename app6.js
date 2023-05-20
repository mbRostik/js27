var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.courses = {
        'html': true,
        'css': true,
        'php': false,
        'js': true,
        'angular': false,
    };
});
