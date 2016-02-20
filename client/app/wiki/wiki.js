'use strict';

angular.module('siloApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wiki', {
        url: '/wiki',
        templateUrl: 'app/wiki/wiki.html',
        controller: 'WikiCtrl'
      });
  });