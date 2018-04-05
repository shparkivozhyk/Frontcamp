var angular = require('angular');
require('angular-mocks');
require('angular-route');
require('angular-resource');
require('../index');

describe("app", function() {
    var controller;

    beforeEach(function() {

        angular.mock.module("toDoApp");

        inject(function($controller) {
            controller = $controller("toDoController");

        });
    });

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });
});