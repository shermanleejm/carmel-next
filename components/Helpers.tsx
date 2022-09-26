import { useWindowSize } from '@react-hook/window-size';

import { useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = 900;

export function useIsMobile() {
  const [isMobile, setisMobile] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setisMobile(width <= MOBILE_BREAKPOINT);
  }, [width]);

  return isMobile;
}

export function removeTags(dirty: string) {
  const regex = /(<([^>]+)>)/gi;
  return dirty.replace(regex, '');
}
