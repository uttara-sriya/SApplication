/**
 * Created by spandanak on 6/30/2016.
 */
/**
 * Created by spandanak on 6/30/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:chapterPageCtrl
 * @description
 * # chapterPageCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('chapterPageCtrl',function ($scope){
   // $scope.contentCollapse = true;
    $scope.collapseOne = false;

    $scope.test = function(){
      $scope.collapseOne = !$scope.collapseOne;

    };

    $scope.toggle_visibility = function () {
      $scope.RecentlyListenedsub = !$scope.RecentlyListenedsub ;
    };
    $scope.toggle_latest = function(){
      $scope.MyLatestRecordingssub = !$scope.MyLatestRecordingssub ;
    };
    $scope.toggle_shared = function(){
      $scope.RecentlySharedWithMesub = !$scope.RecentlySharedWithMesub ;
    };

  });
