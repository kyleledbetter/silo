'use strict';

angular.module('siloApp')
  .controller('TasksCtrl', function ($scope) {
    $scope.message = 'Hello';

    // Mock activity
    $scope.activity = [
      {
        what: 'Build an agile intranet',
        who: 'Ali Conners',
        avatar: 'svg-1',
        when: 'Feb 20, 2016 at 3:08PM',
        status: true,
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Build an OSX app',
        who: 'Don Jonson',
        avatar: 'svg-2',
        when: 'Feb 20, 2016 at 3:08PM',
        status: true,
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'Build an iOS app',
        who: 'Sandra Adams',
        avatar: 'svg-3',
        when: 'Feb 20, 2016 at 3:08PM',
        status: false,
        notes: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        what: 'Build an Android app',
        who: 'Trevor Hansen',
        avatar: 'svg-4',
        when: 'Feb 20, 2016 at 3:08PM',
        status: false,
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'Build a Windows app',
        who: 'Brian Holt',
        avatar: 'svg-5',
        when: 'Feb 20, 2016 at 3:08PM',
        status: false,
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
      },
    ];
  });
