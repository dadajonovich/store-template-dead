import { useLayoutEffect, useState, useRef } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themes')) || 'dark'
  );
  const elementRef = useRef();

  useLayoutEffect(() => {
    elementRef.current.setAttribute('data-theme', theme);
    localStorage.setItem('themes', JSON.stringify(theme));
  }, [theme]);

  return [elementRef, () => setTheme(theme === 'light' ? 'dark' : 'light')];
};

export default useTheme;
