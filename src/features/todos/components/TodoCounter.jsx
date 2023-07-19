// function TodoCounter({ totalTodos, completedTodos }) {
function TodoCounter() {
  return (
    <h2 className='text-center sm:text-lg md:text-xl lg:text-3xl font-RobotoMonoSemiBoldItalic dark:text-white'>
      Has completado 2 de 3 TODOs
    </h2>
  );
}

// TodoCounter.propTypes = {
//   totalTodos: PropTypes.number,
//   completedTodos: PropTypes.number,
// };

export { TodoCounter };
