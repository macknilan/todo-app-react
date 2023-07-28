import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'flowbite-react';
import { Fragment, useContext } from 'react';
import { HiBugAnt, HiOutlineBattery100 } from 'react-icons/hi2';
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
          <div
            role='status'
            className='container mx-auto border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
          >
            <div className='flex items-center justify-between'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
              </div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
            </div>
            <span className='sr-only'>l o a d i n g . . . </span>
          </div>
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
