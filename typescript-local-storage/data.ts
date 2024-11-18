/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const storedTodo = localStorage.getItem('todos-storage');
  if (storedTodo) {
    return JSON.parse(storedTodo);
  } else {
    return [];
  }
}
