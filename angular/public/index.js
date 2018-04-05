var app = angular.module('toDoApp', ['ngRoute', 'ngResource']);

app.controller('toDoController', function($http, $location, todoFactory) {
    var self = this;
    this.todoList = [];
    this.message = "Hello";
    $http.get('todos.json')
        .then(response => {
            self.todoList = response.data;
        })
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
        if ($location.$$path !== '/add') {
            var id = $location.$$path.split('/')[1];
            var todoNumber;
            this.todoList = this.todoList.filter(todo => {
                return todo.date !== +id;
            })
        };
        this.todoList.push({
            done: false,
            title: this.newTodoTitle,
            body: this.newTodoText,
            date: +id || Date.now()

        })
        $location.path('/');
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
    this.sortAlphabetically = function() {
        self.todoList = self.todoList.sort((prev, next) => {
            return prev.todo > next.todo;
        })
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

app.directive('filters', function() {
    return {
        templateUrl: './templates/filters.html',
        controller: 'toDoController',
        controllerAs: 'ctrl'
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