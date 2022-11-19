import { Fragment } from 'react';

import { MyHeader } from '../components/MyHeader';
import { MyMain } from '../components/MyMain';
import { MyFooter } from '../components/MyFooter';
import { Nav } from '../components/Nav';

function Layout() {
  return (
    <Fragment>
      <MyHeader />
      <Nav />
      <MyMain />
      <MyFooter />
    </Fragment>
  );
}

export { Layout };
