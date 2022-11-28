// import React from 'react'

import { Fragment, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  { key: 1, text: 'Cortar cebolla 0', completed: false },
  { key: 2, text: 'Tormar el curso de intro a react 1', completed: true },
  { key: 3, text: 'Llorar con la llorona 2', completed: false },
  { key: 4, text: 'Cortar cebolla 3', completed: false },
  { key: 5, text: 'Tormar el curso de intro a react 4', completed: true },
  { key: 6, text: 'Llorar con la llorona 5', completed: false },
];

function MyMain() {
  //   const [todos, setTodos] = useState(defaultTodos);
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  // Buscar todos y los completados todos
  const completedTodos = todos.filter((todos) => todos.completed).length;
  const totalTodos = defaultTodos.length;

  // Hacer el filtrado mientras se escribe en el input
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

  // marcar todo como completado
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
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
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>
    </Fragment>
  );
}

export { MyMain };
