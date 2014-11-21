'use strict';

/**
 * @ngdoc function
 * @name testdrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testdrApp
 */
angular.module('testdrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
