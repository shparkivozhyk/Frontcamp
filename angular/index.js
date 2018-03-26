var app = angular.module('toDoApp', []);

app.controller('toDoController', function() {
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

    this.addTodo = function() {
        this.todoList.push({
            done: false,
            todo: this.newTodo

        })
        this.newTodo = '';
    }
})