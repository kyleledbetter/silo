'use strict';

angular.module('siloApp')
  .controller('FilesCtrl', function ($scope, $mdSidenav) {
    $scope.message = 'Hello';
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    // Mock activity
  $scope.activity = [
      {
        what: 'filename_etc.jpg',
        who: 'Ali Conners',
        avatar: 'svg-1',
        when: 'Feb 20, 2016 at 3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'filename_etc.pdf',
        who: 'Don Jonson',
        avatar: 'svg-2',
        when: 'Feb 20, 2016 at 3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'filename_etc.xls',
        who: 'Sandra Adams',
        avatar: 'svg-3',
        when: 'Feb 20, 2016 at 3:08PM',
        notes: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        what: 'filename_etc.doc',
        who: 'Trevor Hansen',
        avatar: 'svg-4',
        when: 'Feb 20, 2016 at 3:08PM',
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'filename_etc.png',
        who: 'Brian Holt',
        avatar: 'svg-5',
        when: 'Feb 20, 2016 at 3:08PM',
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
      },
    ];
  });
