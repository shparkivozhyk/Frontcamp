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

    it("Should return list of predefined todos", function() {
        var list = controller.todoList;
        expect(list).toBeDefined();
        expect(list.length).toEqual(4);
    })

    it("Should return list of non-finished todos", function() {
        var filteredList = controller.filteredList(true);
        expect(filteredList[0].done).toBeTruthy();
    })

    it("Should return correctly filtered list of finished todos", function() {
        var filteredList = controller.filteredList(false);
        expect(filteredList[0].done).toBeFalsy();
    })

    it("Should add new todo in todo list", function() {
        var newTodo = {
            "done": false,
            "todo": "Do nothing",
            "body": "Do nothing and enjoy it",
            "date": Date.now()
        };
        controller.addTodo(newTodo);
        var list = controller.todoList;
        expect(list.length).toEqual(5);
    })

    it("Should sort todo list by date", function() {
        controller.sortByDate('up');
        var list = controller.todoList;
        expect(list[0].date).toBeGreaterThan(list[1].date);
    })

    it("Should return todo list sorted alphabetically", function() {
        controller.sortAlphabetically();
        var list = controller.todoList;
        expect(list[0].todo).toBeLessThan(list[1].todo);
    })
});