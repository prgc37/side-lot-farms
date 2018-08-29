'use strict';

angular.module('myApp.aboutUs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutUs', {
    templateUrl: 'aboutUs/aboutUs.html',
    controller: 'AboutUsCtrl'
  });
}])

.controller('AboutUsCtrl', [function() {

}]);