import { PropTypes } from 'prop-types';

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h2 className='text-center sm:text-lg md:text-xl lg:text-3xl font-RobotoMonoSemiBoldItalic dark:text-white'>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

TodoCounter.propTypes = {
  totalTodos: PropTypes.number,
  completedTodos: PropTypes.number,
};

export { TodoCounter };
