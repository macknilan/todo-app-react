import { Fragment } from 'react';
import { TodoProvider } from './TodosContext';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoHeader } from './components/TodoHeader';
import { TodoMain } from './components/TodoMain';

function TodoFeature() {
  return (
    <TodoProvider>
      <Fragment>
        <CreateTodoButtom />
        <TodoHeader />
        <TodoMain />
      </Fragment>
    </TodoProvider>
  );
}

export { TodoFeature };
