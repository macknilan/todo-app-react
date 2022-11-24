import { Fragment } from 'react';

import { MyHeader } from '../components/MyHeader';
import { MyMain } from '../components/MyMain';
import { MyFooter } from '../components/MyFooter';
import { Nav } from '../components/Nav';
import { CreateTodoButtom } from '../components/CreateTodoButtom';

function Layout() {
  return (
    <Fragment>
      <MyHeader />
      <Nav />
      <CreateTodoButtom />
      <MyMain />
      <MyFooter />
    </Fragment>
  );
}

export { Layout };
