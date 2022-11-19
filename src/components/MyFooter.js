// import React from 'react'
import { Footer } from 'flowbite-react';
import { FaHeart } from 'react-icons/fa';

function MyFooter() {
  return (
    <Footer container={true} className='fixed bottom-0 left-0 z-20 '>
      <Footer.LinkGroup className='justify-center w-full'>
        <Footer.Link href='#'>whit love by mack&nbsp;</Footer.Link>
        <Footer.Icon href='#' icon={FaHeart} />
      </Footer.LinkGroup>
    </Footer>
  );
}

export { MyFooter };
