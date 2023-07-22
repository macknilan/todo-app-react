import { Fragment } from 'react';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoHeader } from './components/TodoHeader';
import { TodoMain } from './components/TodoMain';

function TodoFeature() {
  return (
    <Fragment>
      <CreateTodoButtom />
      <TodoHeader />
      <TodoMain />
    </Fragment>
  );
}

export { TodoFeature };
