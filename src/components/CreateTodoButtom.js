// import React from 'react'

import { Fragment } from 'react';

function CreateTodoButtom() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <Fragment>
      <div data-dial-init className='fixed flex top-14 group'>
        <button
          type='button'
          data-dial-toggle='speed-dial-menu'
          data-dial-trigger='click'
          aria-controls='speed-dial-menu'
          aria-expanded='false'
          className='flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
          onClick={() => onClickButton('se abre modal')}
        >
          <svg
            aria-hidden='true'
            className='w-8 h-8 transition-transform group-hover:rotate-45'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
          </svg>
          <span className='sr-only'>Open actions menu</span>
        </button>
        <div id='speed-dial-menu' className='flex flex-col items-center hidden mt-4 space-y-2'>
          <button
            type='button'
            data-tooltip-target='tooltip-copy'
            data-tooltip-placement='left'
            className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'></path>
              <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z'></path>
            </svg>
            <span className='sr-only'>Copy</span>
          </button>
          <div
            id='tooltip-copy'
            role='tooltip'
            className='absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Copy
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { CreateTodoButtom };
