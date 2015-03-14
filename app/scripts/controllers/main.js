'use strict';

/**
 * @ngdoc function
 * @name webApp3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp3App
 */
angular.module('webApp3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
