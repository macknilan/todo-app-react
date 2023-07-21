import { Fragment } from 'react';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoCounter } from './components/TodoCounter';
import { TodoHeader } from './components/TodoHeader';
import { TodoMain } from './components/TodoMain';
import { TodoSearch } from './components/TodoSearch';

function TodoFeature() {
  return (
    <Fragment>
      <CreateTodoButtom />
      <TodoHeader />
      <TodoCounter />
      <TodoSearch />
      <TodoMain />
    </Fragment>
  );
}

export { TodoFeature };
