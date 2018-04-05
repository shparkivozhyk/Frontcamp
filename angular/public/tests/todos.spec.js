var angular = require('angular');
require('angular-mocks');
require('../index');

describe("YourControllerHere", function() {
    var $scope;
    var controller;

    beforeEach(function() {

        angular.mock.module("toDoApp");

        inject(function($controller) {
            controller = $controller("toDoApp");

        });
    });

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });

});