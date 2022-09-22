import { useWindowSize } from '@react-hook/window-size';
import { useEffect, useState } from 'react';
import { isMobile, BrowserTypes } from 'react-device-detect';
import { MOBILE_BREAKPOINT, useIsMobile } from '../Helpers';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  const isTouch = useIsMobile();

  return (
    <>
      {!isTouch && <Header />}
      <main> {children} </main>
      <Footer />
    </>
  );
}
