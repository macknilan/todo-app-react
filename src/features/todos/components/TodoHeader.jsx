/*
    TODO: En la barra de progreso tiene que representar el porcentaje del total de completados
*/
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Progress } from 'flowbite-react';
import { Fragment, useContext } from 'react';
import { TodoContexts } from '../context/TodosContext';

function TodoHeader() {
  const contextData = useContext(TodoContexts);

  return (
    <Fragment>
      <div className='container font-bold text-center sm:text-lg md:text-2xl lg:text-3xl'>
        Check List <FontAwesomeIcon icon={faFlagCheckered} />
        <Progress color='green' progress={contextData.percentage} />
      </div>
    </Fragment>
  );
}

export { TodoHeader };
