import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Label, Modal, Textarea } from 'flowbite-react';
import { Fragment, useContext, useState } from 'react';
import { TodoContext } from '../TodosContext';

function CreateTodoButtom() {
  /*
  
  */
  const { addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const [openModal, setOpenModal] = useState((prevState) => !prevState);
  const props = { openModal, setOpenModal };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue('');
    props.setOpenModal(true);
  };

  return (
    <Fragment>
      <div data-dial-init className='fixed right-6 bottom-6 group'>
        <button
          type='button'
          data-dial-toggle='speed-dial-menu-click'
          data-dial-trigger='click'
          aria-controls='speed-dial-menu-click'
          aria-expanded='false'
          className='flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
          onClick={() => props.setOpenModal(false)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className='sr-only'>Open actions menu</span>
        </button>
      </div>
      <Modal show={props.openModal === false} onClose={() => props.setOpenModal(true)}>
        <Modal.Header>Escribe tú nuevo TODO</Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <div className='sm:col-span-2'>
              <Label
                htmlFor='description_todo'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                value='Descripción del todo'
              />
              <Textarea
                id='description_todo'
                rows={5}
                required
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='. . .'
                value={newTodoValue}
                onChange={onChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className='mx-auto'>
            <Button
              className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-1 py-0.5 mr-0 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              //   onClick={() => props.setOpenModal(undefined)}
              type='submit'
            >
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;Añadir
            </Button>
            <Button
              className='px-1 py-0.5 mb-2 mr-0 text-sm font-medium text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
              onClick={() => props.setOpenModal(true)}
            >
              <FontAwesomeIcon icon={faMinus} />
              &nbsp;Cancelar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
}

export { CreateTodoButtom };
