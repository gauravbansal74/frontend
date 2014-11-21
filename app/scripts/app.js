'use strict';

/**
 * @ngdoc overview
 * @name testdrApp
 * @description
 * # testdrApp
 *
 * Main module of the application.
 */
 angular
 .module('testdrApp', ['ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch','ui.router'])
 .constant("appConfig", {
      "url": "http://localhost:3000/",
      "port": "3000",
      "session_id":"0",
      "get_category_url" : "category",
      "get_job_url" : "job",
      "get_list_url" : "getlist.php?m=",
      "get_detail_url" :"getdetails.php?m=",
      "delete_record_url" : "deleterecord.php?m=",
      "get_form_url" : "getform.php?m="
    })
 .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider

    .state('app', {
        url: "/",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })

    .state('job',{
      url: "/job/:categoryId",
      templateUrl: "views/job.html",
      controller: 'JobCtrl'
      })
})
 .service('coreService',function($http, $q, appConfig){

  return({
      getCategory : getCategory,
      getJob : getJob,
      getJobDetail : getJobDetail
  });

  //Get Job List 
  function getJobDetail(id, categoryId){
    var request = $http({
      method : "GET",
      url : appConfig.url+''+appConfig.get_job_url+'/'+id+'/'+categoryId,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    });
    return(request.then(handleSuccess, handleError));
  }

  //Get Job List 
  function getJob(categoryId){
    var request = $http({
      method : "GET",
      url : appConfig.url+''+appConfig.get_job_url+'/'+categoryId,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    });
    return(request.then(handleSuccess, handleError));
  }


  //Get Category List 
  function getCategory(){
    var request = $http({
      method : "GET",
      url : appConfig.url+''+appConfig.get_category_url,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    });
    return(request.then(handleSuccess, handleError));
  }

  function handleError(response) {
    if (! angular.isObject(response.data ) || !response.data.message) {
      return($q.reject(response.data));
    }
    return( $q.reject(response.data));
  }


  function handleSuccess(response) {
    return(response.data);
  }

  function serializeData(data) {
    if (!angular.isObject(data)) {
      return((data == null ) ? "" : data.toString());
    }
    var buffer = [];
    for (var name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      var value = data[name];
      buffer.push(
        encodeURIComponent(name) + "=" + encodeURIComponent((value == null) ? "" : value)
        );
    }
    var source = buffer
    .join( "&" )
    .replace( /%20/g, "+" )
    ;
    return(source);
  }

});
