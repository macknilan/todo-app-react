import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'flowbite-react';
import { Fragment, useContext } from 'react';
import { HiBugAnt, HiOutlineBattery100, HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { TodoContext } from '../TodosContext';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

// const defaultTodos = [
//   { key: 0, text: 'Cortar cebolla 0', completed: false },
//   { key: 1, text: 'Tomar el curso de intro a react 1', completed: true },
//   { key: 2, text: 'Llorar con la llorona 2', completed: false },
//   { key: 3, text: 'Cortar cebolla 3', completed: false },
//   { key: 4, text: 'Tomar el curso de intro a react 4', completed: true },
//   { key: 5, text: 'Llorar con la llorona 5', completed: false },
// ];

function TodoMain() {
  /*
    
  */
  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && (
          <Alert rounded className='my-2 bg-red-400 border-2 border-yellow-500' icon={HiBugAnt}>
            <span>
              <p>Hubo un error ...</p>
            </span>
          </Alert>
        )}
        {!loading && !searchedTodos.length && (
          <Alert
            rounded
            className='my-2 font-black tracking-widest text-gray-300 bg-gray-900 border-2 border-blue-700'
            icon={HiOutlineBattery100}
          >
            <span>
              <p>
                Crea tu primer TODO! <FontAwesomeIcon icon={faGaugeHigh} shake />{' '}
              </p>
            </span>
          </Alert>
        )}
        {loading && (
          <Alert rounded className='my-2 text-gray-900 bg-green-400' icon={HiOutlineExclamationTriangle}>
            <span>
              <div>l o a d i n g ...</div>
            </span>
          </Alert>
        )}

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
