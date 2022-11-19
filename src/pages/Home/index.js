import { Fragment } from 'react';
import { Layout } from '../../layouts';

function Home() {
  return (
    <Fragment>
      <div className='w-full h-screen max-w-5xl px-4 pt-4 mx-auto bg-my_bg_color'>
        <Layout />
      </div>
    </Fragment>
  );
}

export { Home };
