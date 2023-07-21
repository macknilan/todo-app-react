import { faSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import { PropTypes } from 'prop-types';

function TodoItem({ text, completed }) {
  return (
    <li>
      <div className='flex flex-wrap sm:flex-nowrap sm:items-center sm:justify-around p-3 m-3 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 gap-x-1.5 hover:shadow-lg'>
        {completed ? (
          <div className='text-center basis-full sm:basis-auto'>
            <FontAwesomeIcon icon={faSquareCheck} size='xl' />
          </div>
        ) : (
          <div className='text-center basis-full sm:basis-auto'>
            <FontAwesomeIcon icon={faSquare} size='xl' />
          </div>
        )}
        {completed ? (
          <div className='text-sm line-through basis-full sm:basis-4/5 sm:text-lg'>{text}</div>
        ) : (
          <div className='text-sm basis-full sm:basis-4/5 sm:text-lg'>{text}</div>
        )}
        <div className='basis-full sm:basis-auto '>
          <Button color='failure' className='w-full'>
            <FontAwesomeIcon icon={faTrashCan} size='lg' />
          </Button>
        </div>
      </div>
    </li>
  );
}

TodoItem.prototypes = {
  text: PropTypes.string,
};

export { TodoItem };
