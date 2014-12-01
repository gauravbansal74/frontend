'use strict';

/**
 * @ngdoc function
 * @name testdrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testdrApp
 */
angular.module('testdrApp')
  .controller('JobCtrl', function ($scope, $stateParams, coreService) {
  	console.log($stateParams.categoryId);
    coreService.getJob($stateParams.categoryId)
  			.then(function(successmessage){
  				console.log(successmessage);
  				$scope.jobs = successmessage;
  			}, function(errormessage){
  			console.log(errormessage);		
  	 });

  	$scope.data ="";
  	$scope.jobdetail = function(jobId, categoryId){
  		coreService.getJobDetail(jobId, categoryId)
  			.then(function(successmessage){
  				console.log(successmessage[0]);
  				$scope.data = successmessage[0];
  			},function(errormessage){
  				console.log(errormessage);
  			});
  	}
  });
