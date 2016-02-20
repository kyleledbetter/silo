'use strict';

angular.module('siloApp')
  .directive('styles', function () {
    return {
      templateUrl: 'app/styles/styles.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });