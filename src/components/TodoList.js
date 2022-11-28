// import React from 'react'
import { PropTypes } from 'prop-types';

function TodoList(props) {
  return (
    <>
      <ul>{props.children}</ul>
    </>
  );
}

TodoList.propTypes = {
  children: PropTypes.array,
};

export { TodoList };
