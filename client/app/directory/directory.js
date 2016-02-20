'use strict';

angular.module('siloApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('directory', {
        url: '/directory',
        templateUrl: 'app/directory/directory.html',
        controller: 'DirectoryCtrl'
      });
  });