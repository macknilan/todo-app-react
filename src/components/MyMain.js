// import React from 'react'

import { Fragment } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
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
