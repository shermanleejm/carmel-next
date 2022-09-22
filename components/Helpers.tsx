import { useWindowSize } from '@react-hook/window-size';
import { useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = 900;

export function useIsMobile() {
  const [isTouch, setIsTouch] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setIsTouch(width <= MOBILE_BREAKPOINT);
  }, [width]);

  return isTouch;
}
