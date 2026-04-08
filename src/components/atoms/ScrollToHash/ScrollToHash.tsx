import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top of current page
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Small delay to ensure the page has rendered (especially when navigating from another page)
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
