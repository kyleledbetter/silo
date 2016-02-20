'use strict';

angular.module('siloApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('files', {
        url: '/files',
        templateUrl: 'app/files/files.html',
        controller: 'FilesCtrl'
      });
  });