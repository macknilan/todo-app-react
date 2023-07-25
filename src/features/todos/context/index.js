import { createContext } from 'react';

const TodoContext = createContext();

function TodoProvider(props) {
  return (
    <TodoContext.Provider
      value={{
        varContex: 'SOME STRING',
      }}
    >
      (props.children)
    </TodoContext.Provider>
  );
}

export { TodoContext };
