'use strict';

describe('Directive: dSidebar', function () {

  // load the directive's module
  beforeEach(module('myHealthApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d-sidebar></d-sidebar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dSidebar directive');
  }));
});
