"use strict";

{
	function todoController() {
		let toDoList = this;
		toDoList.todos = [
			{
			"id": 0, 
			"task": "stuff to do 1", 
			"complete": true, 
			"edit": false
			},
			{"id": 1, "task": "fight", "complete": false, "edit": false},
			{"id": 2, "task": "eat", "complete": true, "edit": false},
			{"id": 3, "task": "program", "complete": false, "edit": false},
			{"id": 4, "task": "learn", "complete": true, "edit": false},
			{"id": 5, "task": "sleep", "complete": false, "edit": false},
			{"id": 6, "task": "something", "complete": false, "edit": false},
			{"id": 7, "task": "words", "complete": false, "edit": false},
			{"id": 8,"task": "stuff to do 2", "complete": true, "edit": false}
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
				"complete": false,
				"edit": false
			};
			toDoList.todos.push(item);
			console.log(toDoList);
			let newTask = document.getElementById('newTask');
			newTask.value = '';
		}
	}
	angular
	.module("app")
	.controller("todoController", todoController);
}