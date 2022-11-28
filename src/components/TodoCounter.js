import { PropTypes } from 'prop-types';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className='text-3xl text-center font-RobotoMonoSemiBoldItalic dark:text-white'>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

TodoCounter.propTypes = {
  totalTodos: PropTypes.number,
  completedTodos: PropTypes.number,
};

export { TodoCounter };
