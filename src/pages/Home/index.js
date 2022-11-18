import { Fragment } from 'react';

import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoItem } from '../../components/TodoItem';
import { TodoList } from '../../components/TodoList';
import { CreateTodoButtom } from '../../components/CreateTodoButtom';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function Home() {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </Fragment>
  );
}

export { Home };
