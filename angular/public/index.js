var app = angular.module('toDoApp', ['ngRoute']);

app.controller('toDoController', function($location) {
    var self = this;
    this.todoList = [
        {
            done: true,
            todo: 'Do nothing',
            date: 1021096246484
        },
        {
            done: false,
            todo: 'Show some tasks',
            date: 1122096245484
        },
        {
            done: false,
            todo: 'Add a task',
            date: 1521096244484
        },
        {
            done: true,
            todo: 'Walk the dog',
            date: 1222096243484
        }
    ];
    this.lists = [
        {
            listName:'New todos',
            done: false
        },
        {
            listName: 'Done todos',
            done: true
        }
    ];
    this.filteredList = function(filter) {
        return self.todoList.filter( todo => todo.done === filter);
    }
    this.addTodo = function() {
        console.log(this.todoList);
        this.todoList.push({
            done: false,
            todo: this.newTodo,
            date: Date.now()

        })
        $location.path('/');
        console.log(this.todoList);
    }
    this.sortByDate = function(order) {
        self.todoList = self.todoList.sort((prev, next) => {
            if (order === 'up') {
                return prev.date < next.date;
            }
            else {
                return prev.date > next.date;
            }
        })
    };
    this.sortAlphabetically = function(letter) {
        return self.todoList.filter((todo) => {
            if (letter === '') {
                return todo;
            }
            return todo.todo.indexOf(letter) === 0;
        })
        console.log(self.todoList);
    }
})

app.directive('lengthvalidation', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $elem, $attrs, $ctrl) {
            function lengthValidation(value) {
                if (value.length >= 20) {
                    $ctrl.$setValidity('lengthvalidation', true);
                }
                else {
                    $ctrl.$setValidity('lengthvalidation', false);
                }
                return value;
            }
            $ctrl.$parsers.push(lengthValidation);
        }
    }
});

app.directive('list', function(){
    return {
        templateUrl: './templates/list.html',
        controller: 'toDoController'
    }
})

app.directive('lists', function() {
    return {
        templateUrl: './template/lists.html',
        controller: 'toDoController',
        controllerAs: 'ctrl'
    }
})

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './templates/lists.html',
            controller: 'toDoController',
            controllerAs: 'ctrl'
        })
        .when('/:id/edit', {
            templateUrl: './templates/newTodo.html',
            controller: 'toDoController',
            controllerAs: 'ctrl'
        })
        .when('/add', {
            templateUrl: './templates/newTodo.html',
            controller: 'toDoController',
            controllerAs: 'ctrl'
        })
})