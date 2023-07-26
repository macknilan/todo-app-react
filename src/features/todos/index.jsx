import { Fragment } from 'react';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoHeader } from './components/TodoHeader';
import { TodoMain } from './components/TodoMain';
import { TodosContext } from './context/TodosContext';

function TodoFeature() {
  return (
    <TodosContext>
      <Fragment>
        <CreateTodoButtom />
        <TodoHeader />
        <TodoMain />
      </Fragment>
    </TodosContext>
  );
}

export { TodoFeature };
