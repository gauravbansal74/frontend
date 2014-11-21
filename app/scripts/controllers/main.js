'use strict';

/**
 * @ngdoc function
 * @name testdrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testdrApp
 */
angular.module('testdrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
