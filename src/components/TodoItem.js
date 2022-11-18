// import React from 'react'
import { PropTypes } from 'prop-types';

function TodoItem(props) {
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string,
};

export { TodoItem };
