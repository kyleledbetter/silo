'use strict';

describe('Controller: DirectoryCtrl', function () {

  // load the controller's module
  beforeEach(module('siloApp'));

  var DirectoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectoryCtrl = $controller('DirectoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
