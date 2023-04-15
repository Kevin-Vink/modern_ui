import { useState, useEffect } from 'react';

function useResizeObserver() {
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setSlideWidth(document.getElementsByClassName('slide')[0]?.clientWidth);
    });

    observer.observe(document.documentElement);

    return () => observer.disconnect();
  }, []);

  return slideWidth;
}

export default useResizeObserver;
