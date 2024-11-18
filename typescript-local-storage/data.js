"use strict";
let todos = readTodos();
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    const storedTodo = localStorage.getItem('todos-storage');
    if (storedTodo) {
        return JSON.parse(storedTodo);
    }
    else {
        return [];
    }
}
