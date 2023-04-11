import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themes')) || 'dark'
  );

  // useEffect(() => {
  //   const darkModeMediaQuery = window.matchMedia(
  //     '(prefers-color-scheme: dark)'
  //   );
  //   setTheme(darkModeMediaQuery.matches);
  // }, []);

  useEffect(
    () => localStorage.setItem('themes', JSON.stringify(theme)),
    [theme]
  );

  return [theme, () => setTheme(theme === 'light' ? 'dark' : 'light')];
};

export default useTheme;
