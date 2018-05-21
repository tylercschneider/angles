"use strict";

{
	function todoController() {
		let toDoList = this;
		toDoList.todos = [
			{"id": 0, "task": "stuff to do 1", "complete": true},
			{"id": 1, "task": "fight", "complete": false},
			{"id": 2, "task": "eat", "complete": true},
			{"id": 3, "task": "program", "complete": false},
			{"id": 4, "task": "learn", "complete": true},
			{"id": 5, "task": "sleep", "complete": false},
			{"id": 6, "task": "something", "complete": false},
			{"id": 7, "task": "words", "complete": false},
			{"id": 8,"task": "stuff to do 2", "complete": true}
		];
		toDoList.setDone = function(id) {
			toDoList.todos[id].complete = true;
		}
		toDoList.remove = function(id) {
			toDoList.todos.splice(id, 1);
			for(let i=0; i<toDoList.todos.length; i++){
				toDoList.todos[i].id = i;
			}
		}
		toDoList.add = function(task) {
			let item = {
				"id": toDoList.todos.length,
				"task": task,
				"complete": false
			};
			toDoList.todos.push(item);
			let newTask = document.getElementById('newTask');
			newTask.value = '';
		}
		toDoList.filter = function() {
			return 0;
		}
	}
	angular
	.module("app")
	.controller("todoController", todoController);
}