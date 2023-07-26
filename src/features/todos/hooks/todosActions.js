// CUSTOM HOOKS PARA SEPARAR LAS ACCIONES DE LOS TODOS DE LA LA VISTA JSX
import { useState } from 'react';

function todosActions(todos, saveTodos) {
  const [searchValue, setSearchValue] = useState('');

  // BUSCAR TODOS Y LOS COMPLETADOS TODOS
  const completedTodos = todos.filter((todos) => todos.completed).length;
  const totalTodos = todos.length;

  // HACER EL FILTRADO MIENTRAS SE ESCRIBE EN EL INPUT
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  // MARCAR TODO COMO COMPLETADO
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  // ELIMINAR TODO
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return { completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo };
}

export { todosActions };
