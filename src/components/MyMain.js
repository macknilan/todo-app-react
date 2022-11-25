// import React from 'react'

import { Fragment } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: 'Cortar cebolla 0', completed: false },
  { text: 'Tormar el curso de intro a react 1', completed: true },
  { text: 'Llorar con la llorona 2', completed: false },
  { text: 'Cortar cebolla 3', completed: false },
  { text: 'Tormar el curso de intro a react 4', completed: true },
  { text: 'Llorar con la llorona 5', completed: false },
  { text: 'Cortar cebolla 6', completed: false },
  { text: 'Tormar el curso de intro a react 7', completed: true },
  { text: 'Llorar con la llorona 8', completed: false },
  { text: 'Cortar cebolla 9', completed: false },
  { text: 'Tormar el curso de intro a react 10', completed: true },
  { text: 'Llorar con la llorona 11', completed: false },
];

function MyMain() {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
    </Fragment>
  );
}

export { MyMain };
