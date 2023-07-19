import { PropTypes } from 'prop-types';
import { Fragment } from 'react';

function TodoList({ children }) {
  return (
    <Fragment>
      <ul>{children}</ul>
    </Fragment>
  );
}

TodoList.propTypes = {
  children: PropTypes.array,
};

export { TodoList };
