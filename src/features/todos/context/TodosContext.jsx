import { createContext } from 'react';

const TodoContexts = createContext();

function TodosContext(props) {
  const data = { percentage: 30 };
  return <TodoContexts.Provider value={data}>{props.children}</TodoContexts.Provider>;
}

export { TodoContexts, TodosContext };
