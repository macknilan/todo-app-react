import { Fragment } from 'react';
import { TodoFeature } from '../features/todos';

function MainContainer() {
  return (
    <Fragment>
      <div className='m-2'>
        <TodoFeature />
      </div>
    </Fragment>
  );
}

export { MainContainer };
