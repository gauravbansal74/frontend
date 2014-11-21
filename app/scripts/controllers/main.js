'use strict';

/**
 * @ngdoc function
 * @name testdrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testdrApp
 */
angular.module('testdrApp')
  .controller('MainCtrl', function ($scope, appConfig, coreService) {
  		coreService.getCategory()
  			.then(function(successmessage){
  				console.log(successmessage);
  				$scope.categories = successmessage;
  			}, function(errormessage){
  				
  			});
  });
