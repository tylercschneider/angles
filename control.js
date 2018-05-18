"use strict";

{
	function todoController() {
		let vm = this;
		vm.todoList = [
			{"id": 1, "task": "stuff to do 1", "complete": false},
			{"id": 2, "task": "stuff to do 1", "complete": false},
			{"id": 3, "task": "stuff to do 1", "complete": false},
			{"id": 4, "task": "stuff to do 1", "complete": false},
			{"id": 5, "task": "stuff to do 1", "complete": true},
			{"id": 6, "task": "stuff to do 1", "complete": false},
			{"id": 7, "task": "stuff to do 1", "complete": false},
			{"id": 8, "task": "stuff to do 1", "complete": false},
			{"id": 9,"task": "stuff to do 2", "complete": true}
		];
	}
	angular
	.module("app")
	.controller("todoController", todoController);
}