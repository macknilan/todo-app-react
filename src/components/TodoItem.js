// import React from 'react'
import { PropTypes } from 'prop-types';
import { Card, Button } from 'flowbite-react';
import { FaTrashAlt } from 'react-icons/fa';
function TodoItem(props) {
  return (
    <ul>
      <Card className='my-2.5 h-12'>
        <li className='flex items-center justify-between space-x-4'>
          <div>
            {props.completed ? (
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
          {props.completed ? (
            <div className='w-10/12'>
              <div className='text-base max-[425px]:text-sm max-[425px]:text-[11px] max-[425px]:font-RobotoMonoSemiBold'>
                {props.text}
              </div>
            </div>
          ) : (
            <div className='w-10/12'>
              <div className='line-through text-base max-[425px]:text-sm max-[425px]:text-[11px] max-[425px]:font-RobotoMonoSemiBold'>
                {props.text}
              </div>
            </div>
          )}
          <div>
            <Button>
              <FaTrashAlt className='w-4 h-4' />
            </Button>
          </div>
        </li>
      </Card>
    </ul>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
};

export { TodoItem };
