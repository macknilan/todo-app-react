import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

function TodoHeader() {
  return (
    <Fragment>
      <div className='container font-bold text-center sm:text-lg md:text-2xl lg:text-3xl'>
        <h2>
          Check List <FontAwesomeIcon icon={faFlagCheckered} />
        </h2>
      </div>
    </Fragment>
  );
}

export { TodoHeader };
