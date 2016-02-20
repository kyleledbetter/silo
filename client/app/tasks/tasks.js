'use strict';

angular.module('siloApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tasks', {
        url: '/tasks',
        templateUrl: 'app/tasks/tasks.html',
        controller: 'TasksCtrl'
      });
  });