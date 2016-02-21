'use strict';

angular.module('siloApp')
  .controller('QuestionsCtrl', function ($scope, $mdSidenav) {
    $scope.message = 'Hello';
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    $scope.activity = [
      {
        what: 'Brunch this weekend?',
        who: 'Ali Conners',
        avatar: 'svg-1',
        when: '3:08PM',
        notes: "I'll be in your neighborhood doing errands. Selfies tumblr dreamcatcher, wayfarers mlkshk master cleanse mixtape man bun tofu you probably haven't heard of them pitchfork banjo."
      },
      {
        what: 'Summer BBQ?',
        who: 'to Alex, Scott, Jennifer',
        avatar: 'svg-2',
        when: '3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend. Selfies tumblr dreamcatcher, wayfarers mlkshk master cleanse mixtape man bun tofu you probably haven't heard of them pitchfork banjo."
      },
      {
        what: 'Oui Oui?',
        who: 'Sandra Adams',
        avatar: 'svg-3',
        when: '3:08PM',
        notes: "Do you have Paris recommendations? Have you ever been? Selfies tumblr dreamcatcher, wayfarers mlkshk master cleanse mixtape man bun tofu you probably haven't heard of them pitchfork banjo."
      },
      {
        what: 'Birthday Gift?',
        who: 'Trevor Hansen',
        avatar: 'svg-4',
        when: '3:08PM',
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'Recipe to try?',
        who: 'Brian Holt',
        avatar: 'svg-5',
        when: '3:08PM',
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos. Selfies tumblr dreamcatcher, wayfarers mlkshk master cleanse mixtape man bun tofu you probably haven't heard of them pitchfork banjo."
      },
    ];
  });
