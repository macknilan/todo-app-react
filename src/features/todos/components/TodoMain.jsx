import { Fragment } from 'react';
import { useLocalStorage } from '../hooks/localStorage';
import { todosActions } from '../hooks/todosActions';
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

function TodoMain() {
  const { item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const { completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo} = todosActions(todos, saveTodos)

  return (
    <Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Hubo un error ...</p>}
        {loading && <p>l o a d i n g ...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
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

export { TodoMain };
