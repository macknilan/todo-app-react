import { Fragment } from 'react';
import { MyFooter } from '../layouts/Footer';
import { MainContainer } from '../layouts/MainContainer';
import { MyHeader } from '/src/layouts/Header';
import { MyNav } from '/src/layouts/Nav';

function Home() {
  return (
    <Fragment>
      <div className='container px-4 mx-auto'>
        <MyHeader />
        <MyNav />
        <MainContainer />
        <MyFooter />
      </div>
    </Fragment>
  );
}

export { Home };
