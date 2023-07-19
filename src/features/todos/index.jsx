import { Fragment } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoHeader } from './components/TodoHeader';
import { TodoMain } from './components/TodoMain';

function TodoFeature() {
  return (
    <Fragment>
      <TodoHeader />
      <TodoCounter />
      <TodoMain />
    </Fragment>
  );
}

export { TodoFeature };
