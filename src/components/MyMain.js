// import React from 'react'

import { Fragment, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

// const defaultTodos = [
//   { key: 0, text: 'Cortar cebolla 0', completed: false },
//   { key: 1, text: 'Tormar el curso de intro a react 1', completed: true },
//   { key: 2, text: 'Llorar con la llorona 2', completed: false },
//   { key: 3, text: 'Cortar cebolla 3', completed: false },
//   { key: 4, text: 'Tormar el curso de intro a react 4', completed: true },
//   { key: 5, text: 'Llorar con la llorona 5', completed: false },
// ];

function MyMain() {
  // TRAER DE LOCALSTORAGE EL ARRAY DE TODO'S
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // PERSISTIR LOS TODOS MODIFICADOS EN LOCALSTORAGE
  const saveTodos = (newTodos) => {
    const stringifyTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifyTodos);
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState(parsedTodos);
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

  return (
    <Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </Fragment>
  );
}

export { MyMain };
