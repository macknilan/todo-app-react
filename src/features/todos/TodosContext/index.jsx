import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

const TodoContext = createContext();

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

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
  // AGREGAR TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      key: newTodos.length + 1,
    });
    saveTodos(newTodos);
  };

  // DATO DE PRUEBA PARA DESARROLLAR DESPUÉS
  const data = { percentage: 30 };

  return (
    <TodoContext.Provider
      value={{
        data,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
