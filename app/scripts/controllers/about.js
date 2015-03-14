'use strict';

/**
 * @ngdoc function
 * @name webApp3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp3App
 */
angular.module('webApp3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
