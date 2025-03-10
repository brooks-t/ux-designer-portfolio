
import { useEffect, useRef } from 'react';
import { bubbleCursor } from '@/lib/bubbleCursor';

export function useBubbleCursor(elementRef: React.RefObject<HTMLElement>, enabled: boolean = true) {
  const cursorEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    // Initialize the bubble cursor
    cursorEffect.current = bubbleCursor({
      element: elementRef.current
    });

    // Clean up when the component unmounts
    return () => {
      if (cursorEffect.current) {
        cursorEffect.current.destroy();
        cursorEffect.current = null;
      }
    };
  }, [elementRef, enabled]);

  return cursorEffect.current;
}
