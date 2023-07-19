import { Fragment } from 'react';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

const defaultTodos = [
  { key: 0, text: 'Cortar cebolla 0', completed: false },
  { key: 1, text: 'Tormar el curso de intro a react 1', completed: true },
  { key: 2, text: 'Llorar con la llorona 2', completed: false },
  { key: 3, text: 'Cortar cebolla 3', completed: false },
  { key: 4, text: 'Tormar el curso de intro a react 4', completed: true },
  { key: 5, text: 'Llorar con la llorona 5', completed: false },
];

function TodoMain() {
  return (
    <Fragment>
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
    </Fragment>
  );
}

export { TodoMain };
