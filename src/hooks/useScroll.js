import { useEffect } from 'react';

function useScroll(customOnScrollDown = null, customOnScrollUp = null) {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && customOnScrollDown) {
        // 向下滚动
        customOnScrollDown();
      } else if (event.deltaY < 0 && customOnScrollUp) {
        // 向上滚动
        customOnScrollUp();
      }
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [customOnScrollDown, customOnScrollUp]);
}

export default useScroll;